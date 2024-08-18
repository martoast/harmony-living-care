// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-vuefire",
    "nuxt-calendly"
  ],
  image: {
    provider: 'netlify',
    domains: ['images.unsplash.com', 'tailwindui.com'],
    format: ['webp', 'png', 'jpg', 'svg'],
    sizes: 'sm:100vw md:50vw lg:400px'
  },
  vuefire: {
    auth: {
      enabled: true
    },

    config: {
      apiKey: "AIzaSyDfIYYWHiK-37Ct-5YQFv3V77m3DjJLEEs",
      authDomain: "harmony-livingcare.firebaseapp.com",
      projectId: "harmony-livingcare",
      storageBucket: "harmony-livingcare.appspot.com",
      messagingSenderId: "755371459745",
      appId: "1:755371459745:web:85242ba9227859a6c01ce0",
      measurementId: "G-7BQQVFYDLG"
    },
  },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      nodeVersion: '18',
      httpsOptions: {
        region: 'us-central1',
        maxInstances: 3,
      },
    },
  },
  runtimeConfig: {
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    public: {
      MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
    }
  },
  // optional config
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true
  },
  routeRules: {
    '/': { ssr: false },
    '/login/**': { ssr: false },
    '/careers/**': { ssr: false },
    '/communities/**': { ssr: false },
  }
})