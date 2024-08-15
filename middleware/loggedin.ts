import { getCurrentUser } from 'vuefire'

export default defineNuxtRouteMiddleware(async (to) => {
    const currentUser = await getCurrentUser()
    if (currentUser) {
      return navigateTo({
        path: '/',
      })
    }
})