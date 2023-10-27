// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxthq/neo'],
  modules: [
    '@nuxtjs/mdc',
    'nuxt-og-image'
  ],
  mdc: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'material-theme-palenight',
      }
    }
  },
  devtools: {
    enabled: true
  },
  // Enable CSS nesting: https://github.com/postcss/postcss-nested
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  // Hotfix waiting for fix in Nitro
  experimental: {
    appManifest: false
  }
})
