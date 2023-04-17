export default defineEventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
  const notes = useStorage('notes')

  // Force being a string (CF workers always returns a Buffer)
  const body = (await readRawBody(event, 'utf8'))?.toString() || ''

  if (!process.env.PASSWORD) {
    throw createError({
      statusCode: 500,
      message: 'Missing PASSWORD en variable'
    })
  }
  if (getHeader(event, 'password') !== process.env.PASSWORD) {
    throw createError({
      statusCode: 401,
      message: 'Wrong password'
    })
  }

  await notes.setItem(slug, body)

  return { slug, body }
})