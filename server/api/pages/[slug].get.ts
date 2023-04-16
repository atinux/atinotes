export default defineEventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }

  const notes = useStorage('notes')

  let body = (await notes.getItem(slug))

  if (typeof body !== 'string') {
    body = '# Hello'
  }

  return { slug, body }
})