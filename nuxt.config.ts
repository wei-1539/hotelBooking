// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
  },
  css:[
    '@unocss/reset/eric-meyer.css',
    'assets/styles/reset.css',
    'assets/styles/transition.css',
  ],
  modules:['@unocss/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
