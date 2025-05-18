// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiToken: process.env.NUXT_TOKEN,
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_BASEURL,
    },
  },
  app: {},
  css: [
    "@unocss/reset/eric-meyer.css",
    "assets/styles/reset.css",
    "assets/styles/transition.css",
  ],
  modules: ["@unocss/nuxt","@pinia/nuxt"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
