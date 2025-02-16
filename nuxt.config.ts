// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-svgo'
  ],
  css: ['~/assets/css/main.css'],
  eslint: {
    // options here
  },
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss(),
    ],
  },
})