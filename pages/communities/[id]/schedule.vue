<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-6">
      <a :href="'/communities/' + route.params.id" class="inline-block">
        <button type="button" class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back
        </button>
      </a>
    </div>
    <CalendlyInlineWidget v-bind="options" class="h-screen" />
  </div>
</template>

<script setup>
import { usePropertiesStore } from '~/store/DataStore'

const route = useRoute()
const store = usePropertiesStore()
    
await useAsyncData('property', () => store.find(route.params.id))

const property = computed(() => ({
  ...store.property
}))

const options = computed(() => ({
  url: `https://calendly.com/e_steban/harmony-discovery-call?primary_color=ef4444` +
       `&a1=${encodeURIComponent(`I'm interested in ${property.value.address}`)}`,
}))
</script>