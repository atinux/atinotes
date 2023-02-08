// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  nitro: {
    storage: {
      notes: {
        driver: 'cloudflare-kv-binding',
        binding: 'ATINOTES'
      }
    },
    devStorage: {
      notes: {
        driver: 'fs',
        base: './.data/notes'
      }
    }
  },
  runtimeConfig: {
    password: process.env.NUXT_PASSWORD || 'ilovenuxt'
  }
})
