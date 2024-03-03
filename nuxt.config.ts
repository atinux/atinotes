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
  nitro: {
    experimental: {
      wasm: true
    }
  },
  devtools: {
    enabled: true
  }
})
