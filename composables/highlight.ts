import shikiTransformer from '@nuxt/content/transformers/shiki/shiki'

export async function highlight(parsed) {
  await shikiTransformer.transform(parsed, {
    preload: ['js', 'ts', 'md', 'vue'],
    theme: {
      default: 'github-light',
      dark: 'github-dark'
    }
  })
  return parsed
}