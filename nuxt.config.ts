export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  // Cette ligne indique à Nuxt de charger TON fichier de styles personnalisés
  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [400, 500, 600, 700],
    },
    display: 'swap',
  },
})