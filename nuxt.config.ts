// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable content to leverages <ContentRendererMarkdown /> component
  extends: '@nuxthq/neo',
  modules: [
    '@nuxt/content',
    'nuxt-og-image'
  ],
  devtools: {
    enabled: true
  },
  // Enable CSS nesting: https://github.com/postcss/postcss-nested
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  ogImage: {
    browserProvider: false
  }
})
