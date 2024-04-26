// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // https://ui.nuxt.com/pro
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-auth-utils',
    '@nuxtjs/plausible'
  ],
  hub: {
    kv: true
  },
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
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },
  devtools: {
    enabled: true
  }
})
