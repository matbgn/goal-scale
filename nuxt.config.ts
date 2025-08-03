import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@vueform/nuxt'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // GitHub Pages: static SPA with project base path
  ssr: false,
  app: {
    baseURL: '/goal-scale/',
    buildAssetsDir: 'assets'
  }
})
