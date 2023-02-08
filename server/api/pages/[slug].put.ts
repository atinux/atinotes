const storage = useStorage()
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params || {}
  // Force being a string (CF workers always returns a Buffer)
  const body = (await readRawBody(event, 'utf8'))?.toString()

  if (getHeader(event, 'password') !== config.password) {
    throw createError({
      statusCode: 401,
      message: 'Wrong password'
    })
  }

  await storage.setItem(`notes:${slug}`, body)

  return { slug, body }
})