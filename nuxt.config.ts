// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['./layers/nuxtflare/'],
  // Enable content to leverages <ContentRendererMarkdown /> component
  modules: ['@nuxt/content'],
  devtools: {
    enabled: true
  },
  // Define storage used in API routes with useStorage()
  nitro: {
    storage: {
      notes: {
        driver: 'cloudflare-kv-binding',
        binding: 'ATINOTES'
      }
    },
    // Overwrite notes storage in development using FS
    devStorage: {
      notes: {
        driver: 'fs',
        base: './.data/notes'
      }
    }
  },
  // Password to edit the notes
  runtimeConfig: {
    password: process.env.NUXT_PASSWORD || 'ilovenuxt'
  },
  // Enable CSS nesting: https://github.com/postcss/postcss-nested
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  typescript: {
    includeWorkspace: true
  }
  // ogImage: {
  //   url: 'https://atinotes.nuxt.space'
  // }
})
