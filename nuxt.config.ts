// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable content to leverages <ContentRendererMarkdown /> component
  extends: '@nuxthq/neo',
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
  ogImage: {
    browserProvider: false
  },
  nitro: {
    experimental: {
      wasm: true
    }
  }
})
