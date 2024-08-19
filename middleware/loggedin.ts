import { getCurrentUser } from 'vuefire'

export default defineNuxtRouteMiddleware(async (to) => {
    const currentUser = await getCurrentUser()
    console.log(currentUser)
    if (currentUser) {
      return navigateTo({
        path: '/',
      })
    }
})