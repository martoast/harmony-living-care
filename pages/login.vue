<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-32 lg:px-8">
    <div class="max-w-xl mx-auto w-full">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="/main-logo.svg" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="signInRedirect" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" v-model="data.form.email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" v-model="data.form.password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error:</strong>
            <span class="block sm:inline">{{ error }}</span>
          </div>

          <div>
            <button type="submit" :disabled="data.loading" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:opacity-50">
              {{ data.loading ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/register" class="font-semibold leading-6 text-red-500 hover:text-red-400">Create an account</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const route = useRoute()

const auth = useFirebaseAuth()

definePageMeta({
  middleware: ["loggedin"]
})


const error = ref(null)

const data = reactive({
  loading: false,
  form: {
    email: null,
    password: null
  }
})

const signInRedirect = async () => {
  try {
    data.loading = true
    error.value = null
    await signInWithEmailAndPassword(auth, data.form.email, data.form.password)
    // Check for redirect query parameter
    const redirectPath = route.query.redirect
    if (redirectPath && typeof redirectPath === 'string') {
      await navigateTo(redirectPath)
    } else {
      await navigateTo('/')
    }
    
  } catch (err) {
    error.value = err
    
  } finally {
    data.loading = false
  }
}
</script>