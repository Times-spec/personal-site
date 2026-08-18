import { createHash } from 'node:crypto'
import { getRequestHeader, getRequestIP } from 'h3'

type RedisResponse = {
  result?: unknown
  error?: string
}

const INITIAL_VISITOR_COUNT = 100
const TOTAL_KEY = 'personal-site:analytics:daily-unique-visitors'

const redisCommand = async (url: string, token: string, command: unknown[]) => {
  const response = await $fetch<RedisResponse>(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: command,
    timeout: 3000,
  })

  if (response.error) {
    throw new Error(response.error)
  }

  return response.result
}

const ensureInitialCount = async (url: string, token: string) => {
  // 在 Redis 内原子地把旧数据抬到初始值，避免并发请求把 100 覆盖掉。
  await redisCommand(url, token, [
    'EVAL',
    `
      local current = redis.call('GET', KEYS[1])
      local initial = tonumber(ARGV[1])
      local currentCount = tonumber(current)
      if not currentCount or currentCount < initial then
        redis.call('SET', KEYS[1], ARGV[1])
        return ARGV[1]
      end
      return current
    `,
    '1',
    TOTAL_KEY,
    INITIAL_VISITOR_COUNT,
  ])
}

export default defineEventHandler(async (event) => {
  // 优先使用 Vercel Marketplace 的 Upstash Redis 变量，并兼容旧项目的 KV 变量。
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  const salt = process.env.ANALYTICS_SALT

  if (!redisUrl || !redisToken || !salt) {
    return { count: INITIAL_VISITOR_COUNT, configured: false }
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const userAgent = getRequestHeader(event, 'user-agent') || 'unknown'
  const day = new Date().toISOString().slice(0, 10)
  const visitorHash = createHash('sha256')
    .update(`${salt}:${ip}:${userAgent}`)
    .digest('hex')
    .slice(0, 32)

  const visitorKey = `personal-site:visitor:${day}:${visitorHash}`
  try {
    await ensureInitialCount(redisUrl, redisToken)

    // NX 保证同一访客当天只会成功一次，EX 自动清理旧的访客标记。
    const firstVisit = await redisCommand(redisUrl, redisToken, [
      'SET', visitorKey, '1', 'EX', 172800, 'NX',
    ])

    if (firstVisit === 'OK') {
      await redisCommand(redisUrl, redisToken, ['INCR', TOTAL_KEY])
    }

    const count = Number(await redisCommand(redisUrl, redisToken, ['GET', TOTAL_KEY]))
    return {
      count: Number.isFinite(count) ? Math.max(INITIAL_VISITOR_COUNT, count) : INITIAL_VISITOR_COUNT,
      configured: true,
    }
  } catch {
    return { count: INITIAL_VISITOR_COUNT, configured: false }
  }
})
