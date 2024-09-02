<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto">
      <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
        <div class="mb-4">
          <button @click="handleBackButton" type="button" class="rounded-full bg-red-500 p-2 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>

        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <!-- Image gallery -->
          <TabGroup as="div" class="flex flex-col-reverse">
            <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList class="grid grid-cols-4 gap-6 mb-8">
                <Tab
                  v-for="(image, index) in property.images"
                  :key="index"
                  class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-gray-200 text-sm font-medium uppercase text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  v-slot="{ selected }"
                >
                  <span class="sr-only">Image {{ index + 1 }}</span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      :src="image"
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    :class="[
                      selected ? 'ring-red-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                    ]"
                    aria-hidden="true"
                  />
                </Tab>
              </TabList>
            </div>

            <TabPanels class="aspect-h-1 aspect-w-1 w-full">
              <TabPanel
                v-for="(image, index) in property.images"
                :key="index"
                @click="openModal(index)"
              >
                <img
                  :src="image"
                  :alt="`Image ${index + 1}`"
                  class="h-full w-full object-cover object-center sm:rounded-lg cursor-pointer"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <!-- Property info -->
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
              {{ property.address }}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Property information</h2>
              
              <p class="text-lg text-gray-900">
                {{ property.bedrooms }} beds | {{ property.bathrooms }} baths | {{ property.living_area }} sq ft
              </p>
              

              <div class="mt-4">
                share on:
              <ul role="list" class="mt-2 flex items-center space-x-6">
                <li>
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://harmony-livingcare.web.app/communities/${property.ID}/&t=${encodeURIComponent('Check out this property!')}`" class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500" target="_blank">
                    <span class="sr-only">Share on Facebook</span>
                    <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
               
              </ul>
              </div>

              <div class="mt-6 flex space-x-4">
                <NuxtLink :to="`/communities/${property.ID}/schedule`">
                  <button type="button" class="flex items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Schedule a discovery call
                  </button>
                </NuxtLink>
                
              </div>

  
              
            </div>

            <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900">Description</h3>
              <div class="mt-4 text-base text-gray-500">
                <p>{{ property.description }}</p>
              </div>
            </div>

            <!-- <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900">Features & Amenities</h3>
              <dl class="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <div>
                  <dt class="text-sm font-medium text-gray-500">Property Type</dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ property.property_type }}</dd>
                </div>
                
              </dl>
            </div> -->

            <div v-if="property.nearby_hospitals.length" class="my-8">
              <h3 class="text-lg font-medium text-gray-900">Nearby Medical Facilities</h3>
              <p class="mt-2 text-sm text-gray-500">
                Access to quality healthcare is crucial for assisted living. Here are some nearby medical facilities:
              </p>
              <ul class="mt-4 space-y-4">
                <li v-for="hospital in sortedHospitals.slice(0, 5)" :key="hospital.name" class="flex items-start">
                  <svg class="mt-1 h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-3 text-sm text-gray-500">
                    <strong class="font-medium text-gray-900">{{ hospital.name }}</strong>
                    <br>Distance: {{ hospital.distance }} miles
                  </span>
                </li>
              </ul>
            </div>


            <div class="w-full h-[40vh] mt-8 lg:mt-0">
              <div id="map" class="h-full border border-gray-300 shadow-sm"></div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    <ModalCarousel
      :showModal="isModalOpen"
      :images="property.images"
      :startIndex="selectedImageIndex"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'
import { PlusIcon } from '@heroicons/vue/20/solid'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { usePropertiesStore } from '~/store/DataStore'
import ModalCarousel from '~/components/ModalCarousel.vue'

const route = useRoute()
const store = usePropertiesStore()

const nuxtApp = useNuxtApp()

const config = useRuntimeConfig()

const mapboxgl = nuxtApp.mapboxgl

const access_token = config.public.MAPBOX_API_TOKEN


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

let  map = {}

const sortedHospitals = computed(() => {
  return property.value.nearby_hospitals.slice().sort((a, b) => b.rating - a.rating);
})



const map_config = {
            style: "mapbox://styles/mapbox/streets-v12",
            zoom: 3,
            pitch: 0,
            bearing: 0,
            center: [-100.486052, 37.830348],
        }
        
const isModalOpen = ref(false)
const selectedImageIndex = ref(0)

function openModal(index) {
  selectedImageIndex.value = index
  isModalOpen.value = true
}

function formatCurrency(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

const handleBackButton = async () => {
  await navigateTo('/communities/')
}

const initMap = () => {
    mapboxgl.accessToken = access_token

    // Adjust zoom based on screen width
    const screenWidth = window.innerWidth
    const isMobile = screenWidth <= 768 // Define your mobile breakpoint

    map_config.zoom = isMobile ? 2 : 3 // Adjust zoom levels

        map = new mapboxgl.Map({
            container: "map",
            style: map_config.style,
            zoom: map_config.zoom,
            pitch: map_config.pitch,
            bearing: map_config.bearing,
            center: map_config.center,
            dragPan: true,
            antialias: true,
        }) 
    }

    onMounted(() => {
    initMap();
        
    });
</script>