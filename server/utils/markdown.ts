// @ts-ignore
import mdTransformer from '@nuxt/content/transformers/markdown'

export async function parseMarkdown (body: string) {
  const parsed = await mdTransformer.parse('index.md', body, {})

  if (process.client) {
    await highlight(parsed)
  }

  return parsed
}