interface Note {
  body: string
  parsed?: object
}

export default eventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }

  let note = await hubKV().get<Note>(slug)

  if (!note) {
    note = { body: '# Hello' }
    note.parsed = await parseMarkdown(note.body)
  }

  return { slug, ...note }
})
