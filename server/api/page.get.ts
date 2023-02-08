const storage = useStorage()

export default defineEventHandler(async (event) => {
  let body = (await storage.getItem(`notes:pag`))

  if (typeof body !== 'string') {
    body = '# Hello'
  }

  return { slug, body }
})