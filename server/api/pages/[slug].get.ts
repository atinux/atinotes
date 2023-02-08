const storage = useStorage()

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params || {}
  let body = (await storage.getItem(`notes:${slug}`))

  if (typeof body !== 'string') {
    body = '# Hello'
  }

  return { slug, body }
})