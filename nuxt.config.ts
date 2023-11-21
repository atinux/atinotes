// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@nuxt/ui-pro',
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-auth-utils'
  ],
  ui: {
    icons: ['simple-icons']
  },
  mdc: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'material-theme-palenight'
      }
    }
  },
  devtools: {
    enabled: true
  }
})
