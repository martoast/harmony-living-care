// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "@pinia/nuxt", "nuxt-vuefire"],
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
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "harmony-homecare.firebaseapp.com",
      projectId: "harmony-homecare",
      storageBucket: "harmony-homecare.appspot.com",
      messagingSenderId: "532059299550",
      appId: "1:532059299550:web:539548cefa1886549aec4f",
      measurementId: "G-KVCQQ1LP58"
    },
  },
  nitro: {
    firebase: {
      gen: 2
    }
  },
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    public: {
      MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
    }
  }
})