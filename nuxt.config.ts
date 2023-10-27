// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@nuxt/ui-pro',
    '@nuxthq/neo'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image'
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
  },
  // Hotfix waiting for fix in Nitro
  experimental: {
    appManifest: false
  }
})
