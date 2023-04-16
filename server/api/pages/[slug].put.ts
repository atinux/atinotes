export default defineEventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
  const storage = useStorage()

  // Force being a string (CF workers always returns a Buffer)
  const body = (await readRawBody(event, 'utf8'))?.toString()

  if (getHeader(event, 'password') !== env('PASSWORD')) {
    throw createError({
      statusCode: 401,
      message: 'Wrong password'
    })
  }

  await storage.setItem(`notes:${slug}`, body)

  return { slug, body }
})