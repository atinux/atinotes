// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // https://hub.nuxt.com
    '@nuxthub/core',
    // https://ui.nuxt.com/pro
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-auth-utils',
    "@nuxtjs/plausible"
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