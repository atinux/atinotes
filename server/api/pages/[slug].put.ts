// @ts-ignore
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default eventHandler(async (event) => {
  await requireUserSession(event)
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
  const notes = useKV('notes')
  // Force being a string
  const body = await readRawBody(event)
  const parsed = await parseMarkdown(body)

  await notes.setItem(slug, { body, parsed })

  return { slug, body, parsed }
})