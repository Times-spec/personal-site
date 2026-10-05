import { createError, getQuery } from 'h3'

type RedisResponse = {
  result?: unknown
  error?: string
}

const IP_SET_PREFIX = 'personal-site:ips:'

const redisCommand = async (url: string, token: string, command: unknown[]) => {
  const response = await $fetch<RedisResponse>(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: command,
    timeout: 5000,
  })

  if (response.error) {
    throw new Error(response.error)
  }

  return response.result
}

export default defineEventHandler(async (event) => {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  const salt = process.env.ANALYTICS_SALT

  if (!redisUrl || !redisToken || !salt) {
    throw createError({ statusCode: 500, message: 'analytics not configured' })
  }

  // 用 ANALYTICS_SALT 的值作为查看口令，请勿泄露该 URL
  const token = getQuery(event).token
  if (typeof token !== 'string' || token !== salt) {
    throw createError({ statusCode: 403, message: 'forbidden' })
  }

  const keys: string[] = []
  let cursor = '0'
  do {
    const scan = (await redisCommand(redisUrl, redisToken, [
      'SCAN', cursor, 'MATCH', `${IP_SET_PREFIX}*`, 'COUNT', '200',
    ])) as [string, string[]]
    cursor = String(scan[0])
    keys.push(...scan[1])
  } while (cursor !== '0')

  const days = []
  for (const key of keys.sort().reverse()) {
    const ips = (await redisCommand(redisUrl, redisToken, ['SMEMBERS', key])) as string[]
    days.push({
      day: key.slice(IP_SET_PREFIX.length),
      count: ips.length,
      ips: ips.sort(),
    })
  }

  return { days }
})
