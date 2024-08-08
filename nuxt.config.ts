// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  image: {
    provider: 'netlify',
    domains: ['images.unsplash.com', 'tailwindui.com'],
    format: ['webp', 'png', 'jpg', 'svg'],
    sizes: 'sm:100vw md:50vw lg:400px'
  },
})
