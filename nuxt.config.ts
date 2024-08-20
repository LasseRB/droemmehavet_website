// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    firebase: {
      gen: 2,
    }
  },
  routeRules: {
    '/': { ssr: false },
    '/blog': { ssr: true }
  }
})
