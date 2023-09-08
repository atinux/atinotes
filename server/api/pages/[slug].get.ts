// @ts-ignore
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default eventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }

  const notes = useKV('notes')
  let note: any = await notes.getItem(slug) || { body: '# Hello' }
  // Backward compatibility
  if (typeof note === 'string') {
    note = { body: note }
  }

  if (!note.parsed) {
    note.parsed = await parseMarkdown(note.body)
  }

  return { slug, ...note }
})