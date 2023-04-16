import { H3Event } from 'h3'

let _env: any = null

export function setEnv(event: H3Event) {
  if (!_env) {
    _env = event.context.cloudflare?.env || process.env || {}
  }
}

export function env(key?: string, defaultValue?: any) {
  if (!_env) {
    throw new Error('Please use setEnv(event) before using env()')
  }
  if (!key) {
    return _env
  }
  if (!_env[key] && !defaultValue) {
    if (process.dev) {
      console.error(`Missing env variable: ${key}`)
    } else {
      throw createError({
        statusCode: 500,
        message: `Missing env variable: ${key}`
      })
    }
  }
  return _env[key] || defaultValue
}