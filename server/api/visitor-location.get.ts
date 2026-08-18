import { getRequestHeader, getRequestIP, createError } from 'h3'

type GeoResponse = {
  city?: string
  country?: string
  success?: boolean
}

export default defineEventHandler(async (event) => {
  // Vercel 会在请求进入函数时附带这些地理位置请求头。
  const vercelCity = getRequestHeader(event, 'x-vercel-ip-city')
  const vercelCountry = getRequestHeader(event, 'x-vercel-ip-country')

  if (vercelCity) {
    let city = vercelCity
    try {
      city = decodeURIComponent(vercelCity)
    } catch {
      // 使用原始请求头即可，不让异常的编码影响页面访问。
    }
    return { city, country: vercelCountry || '' }
  }

  const ip = getRequestIP(event, { xForwardedFor: true })
  if (!ip || ip === '127.0.0.1' || ip === '::1') {
    return { city: '', country: '' }
  }

  try {
    const result = await $fetch<GeoResponse>(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      timeout: 2500,
    })

    if (result.success === false) {
      return { city: '', country: '' }
    }

    return { city: result.city || '', country: result.country || '' }
  } catch {
    // 地理位置只是增强体验，查询失败不应阻塞网页加载。
    return { city: '', country: '' }
  }
})
