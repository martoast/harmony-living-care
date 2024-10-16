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
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['mapbox-search-box'].includes(tag),
    },
  },
  vuefire: {
    auth: {
      enabled: true
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
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
      GOOGLE_SHEETS_API_CREDENTIALS: process.env.GOOGLE_SHEETS_API_CREDENTIALS,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    }
  },
  // optional config
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true
  }
})