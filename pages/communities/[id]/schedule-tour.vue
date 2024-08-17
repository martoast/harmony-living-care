<template>
    <div class="isolate bg-white px-6 py-32 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-4">
            <NuxtLink :href="`/communities/${property.ID}/`" class="text-sm font-semibold leading-7 text-red-500">Back</NuxtLink>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Schedule a tour</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Submit your request to schedule a tour of this incredible Assisted Living property.</p>
      </div>
      <form @submit.prevent="onSubmit" class="mx-auto max-w-xl mt-8 lg:mt-12">        
        <div class="mb-7">
          <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Date</label>
          <div class="mt-2.5">
            <input type="date" name="date" id="date" v-model="form.date" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="time" class="block text-sm font-semibold leading-6 text-gray-900">Time</label>
          <div class="mt-2.5">
            <input type="time" name="time" id="time" v-model="form.time" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
          </div>
        </div>
        
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Schedule tour</button>
        </div>
      </form>
    </div>
  </template>

<script setup>

import { usePropertiesStore } from '~/store/DataStore'

definePageMeta({
    middleware: ["auth"]
})

const user = useCurrentUser()

const route = useRoute()
const store = usePropertiesStore()
    
await useAsyncData('property', () => store.find(route.params.id))

const property = computed(() => ({
    ...store.property
  }))


const form = ref({
    name: '',
    date: '',
    time: '',
    email: user.value.email
})

const showAlert = ref(false)


const onSubmit = () => {
    console.log(form.value)
}

</script>