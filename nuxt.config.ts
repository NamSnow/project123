// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
  ],

  css: [
    "/assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],

  ssr: true,
  future: {
    compatibilityVersion: 4,
  },
  ui: {
    colorMode: false,
  },

  compatibilityDate: "2024-11-27",
});
