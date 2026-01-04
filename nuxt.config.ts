// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],

  runtimeConfig: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,

    public: {
      appName: 'EcoLens AI'
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // css: ['~/assets/css/main.css'],
  // (Opsional) Konfigurasi Tailwind agar scan file content
  // tailwindcss: {
  //   viewer: false,
  // }
})
