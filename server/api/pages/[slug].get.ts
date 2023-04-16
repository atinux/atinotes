export default defineEventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }

  const storage = useStorage()

  let body = (await storage.getItem(`notes:${slug}`))

  if (typeof body !== 'string') {
    body = '# Hello'
  }

  return { slug, body }
})