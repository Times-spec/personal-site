import { createHash } from 'node:crypto'
import { getRequestHeader, getRequestIP } from 'h3'

type RedisResponse = {
  result?: string | number | null
  error?: string
}

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

export default defineEventHandler(async (event) => {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN
  const salt = process.env.ANALYTICS_SALT

  if (!redisUrl || !redisToken || !salt) {
    return { count: 0, configured: false }
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const userAgent = getRequestHeader(event, 'user-agent') || 'unknown'
  const day = new Date().toISOString().slice(0, 10)
  const visitorHash = createHash('sha256')
    .update(`${salt}:${ip}:${userAgent}`)
    .digest('hex')
    .slice(0, 32)

  const visitorKey = `personal-site:visitor:${day}:${visitorHash}`
  const totalKey = 'personal-site:analytics:daily-unique-visitors'

  try {
    // NX 保证同一访客当天只会成功一次，EX 自动清理旧的访客标记。
    const firstVisit = await redisCommand(redisUrl, redisToken, [
      'SET', visitorKey, '1', 'EX', 172800, 'NX',
    ])

    if (firstVisit === 'OK') {
      await redisCommand(redisUrl, redisToken, ['INCR', totalKey])
    }

    const count = Number(await redisCommand(redisUrl, redisToken, ['GET', totalKey]))
    return { count: Number.isFinite(count) ? count : 0, configured: true }
  } catch {
    return { count: 0, configured: false }
  }
})
