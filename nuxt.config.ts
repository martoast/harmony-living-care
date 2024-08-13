// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
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
      httpsOptions: {
        region: 'us-central1',
        maxInstances: 3,
      },
    },
  },
  runtimeConfig: {
    public: {
      MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
    }
  }
})