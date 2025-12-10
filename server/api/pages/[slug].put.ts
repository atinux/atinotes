import { kv } from 'hub:kv'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default eventHandler(async (event) => {
  await requireUserSession(event)
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
  // Force being a string
  const { body } = await readBody(event)
  const parsed = await parseMarkdown(body)

  await kv.set(slug, { body, parsed })

  return { slug, body, parsed }
})
