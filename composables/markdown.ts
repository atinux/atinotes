import mdTransformer from '@nuxt/content/transformers/markdown'
import shikiTransformer from '@nuxt/content/transformers/shiki/shiki'

export async function parseMarkdown (body: string) {
  const parsed = await mdTransformer.parse('index.md', body, {})

  if (process.client) {
    await highlight(parsed)
  }

  return parsed
}

export async function highlight(parsed) {
  await shikiTransformer.transform(parsed, {
    preload: ['js', 'ts', 'md', 'vue'],
    theme: {
      default: 'github-light',
      dark: 'github-dark'
    }
  })
}