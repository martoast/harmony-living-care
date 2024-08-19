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

        <div>
        <div class="relative mt-10">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm font-medium leading-6">
            <span class="bg-white px-6 text-gray-900">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4">
          <button @click="signinPopup" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
            <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
              <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
            </svg>
            <span class="text-sm font-semibold leading-6">Google</span>
          </button >
        </div>
      </div>

        <p class="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/sign-up" class="font-semibold leading-6 text-red-500 hover:text-red-400">Create an account</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleAuthProvider } from 'firebase/auth'
export const googleAuthProvider = new GoogleAuthProvider()
</script>

<script setup>
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { watch } from 'vue'

const route = useRoute()
const router = useRouter()

const auth = useFirebaseAuth()

const error = ref(null)
const currentUser = ref(null)

const data = reactive({
  loading: false,
  form: {
    email: null,
    password: null
  }
})

// Watch for auth state changes
watch(() => auth, (newAuth) => {
  if (newAuth) {
    onAuthStateChanged(newAuth, (user) => {
      currentUser.value = user
      if (user) {
        redirectAfterLogin()
      }
    })
  }
}, { immediate: true })

const redirectAfterLogin = () => {
  const redirectPath = route.query.redirect
  if (redirectPath && typeof redirectPath === 'string') {
    router.push(redirectPath)
  } else {
    router.push('/')
  }
}

const signInRedirect = async () => {
  try {
    data.loading = true
    error.value = null
    await signInWithEmailAndPassword(auth, data.form.email, data.form.password)
    // Redirection will be handled by the watcher
  } catch (err) {
    error.value = err
  } finally {
    data.loading = false
  }
}

const signinPopup = async () => {
  error.value = null
  try {
    await signInWithPopup(auth, googleAuthProvider)
    // Redirection will be handled by the watcher
  } catch (reason) {
    console.error('Failed sign in', reason)
    error.value = reason
  }
}

// If user is already logged in, redirect
if (currentUser.value) {
  redirectAfterLogin()
}
</script>