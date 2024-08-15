<template>
    <div class="bg-white px-6 pt-12 lg:pt-32 pb-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p class="text-base font-semibold leading-7 text-red-500">Assisted Living Property</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ property.address }}</h1>
        <p class="mt-6 mb-4 text-xl leading-8">{{ formatCurrency(property.price) }} - {{ property.bedrooms }} beds, {{ property.bathrooms }} baths - {{ property.living_area }} sq ft</p>
        <a href="/login">
                <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                  <PlusIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Schedule a tour
              </button>
            </a>
        
        <div class="mt-10 max-w-2xl">
          <p>{{ property.description }}</p>
          <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <svg class="mt-1 h-5 w-5 flex-none text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Property Type:</strong> {{ property.property_type }}</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 h-5 w-5 flex-none text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Year Built:</strong> {{ property.year_built }}</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 h-5 w-5 flex-none text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Zoning:</strong> {{ property.zoning }}</span>
            </li>
          </ul>
        </div>
        
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Nearby Medical Facilities</h2>
        <p class="mt-6">
          Access to quality healthcare is crucial for assisted living. Here are some nearby medical facilities:
        </p>
        <ul class="mt-8 space-y-8 text-gray-600">
          <li v-for="hospital in property.nearby_hospitals.slice(0, 5)" :key="hospital.name" class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span>
              <strong class="font-semibold text-gray-900">{{ hospital.name }}</strong>
              <br>Distance: {{ hospital.distance }} miles | Rating: {{ hospital.rating }}
            </span>
          </li>
        </ul>
        
        <figure class="mt-16">
          <img v-if="property.images.length > 0" :src="property.images[0]" :alt="property.address" class="aspect-video rounded-xl bg-gray-50 object-cover">
          <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
            </svg>
            Property image for {{ property.address }}
          </figcaption>
        </figure>
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePropertiesStore } from '~/store/DataStore'
  import { PlusIcon } from '@heroicons/vue/20/solid'

  definePageMeta({
    middleware: ["auth"]
    })
  
  const route = useRoute()
  const store = usePropertiesStore()
    
  await useAsyncData('property', () => store.find(route.params.id))
  
  const property = computed(() => ({
    ...store.property,
    nearby_hospitals: store.property.nearby_hospitals ? JSON.parse(store.property.nearby_hospitals) : [],
    nearby_schools: store.property.nearby_schools ? JSON.parse(store.property.nearby_schools) : [],
    nearby_homes: store.property.nearby_homes ? JSON.parse(store.property.nearby_homes) : [],
    images: store.property.images.length ? JSON.parse(store.property.images) : [],
    tax_history: store.property.tax_history ? JSON.parse(store.property.tax_history) : [],
    price_history: store.property.price_history ? JSON.parse(store.property.price_history) : [],
  }))
  
  function formatCurrency(value) {
    if (value == null) return 'N/A'
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
  }
  </script>