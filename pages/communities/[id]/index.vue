<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div class="flex items-center">
              <NuxtLink class="mr-2 text-sm font-medium text-gray-900" to="/communities">
                Communities
              </NuxtLink>

              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <span aria-current="page" class="font-medium text-gray-500">{{ property.address }}</span>
          </li>
        </ol>
      </nav>

      <div @click="openModal(0)" class="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 cursor-pointer">
        <div v-if="property.images.length === 1" class="overflow-hidden rounded-lg">
          <img :src="property.images[0]" :alt="property.address" class="w-full h-[400px] object-cover object-center" />
        </div>
        <div v-else class="lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
            <img :src="property.images[0]" :alt="property.address" class="h-full w-full object-cover object-center" />
          </div>
          <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img :src="property.images[1]" :alt="property.address" class="h-full w-full object-cover object-center" />
            </div>
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img :src="property.images[2]" :alt="property.address" class="h-full w-full object-cover object-center" />
            </div>
          </div>
          <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img :src="property.images[3]" :alt="property.address" class="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>

      <!-- Property info -->
      <div class="mx-auto max-w-2xl px-4 pb-12 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ property.address }}</h1>
        </div>

        <!-- Property details -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Property information</h2>
          <p class="text-3xl tracking-tight text-gray-900">Starting at ${{ property.assisted_living_rate }}/ month</p>

          <!-- Property features -->
          <div class="mt-6">
            <h3 class="sr-only">Features</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ property.bedrooms }} beds | {{ property.bathrooms }} baths | {{ property.living_area }} sq ft</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Share on</h3>
            <ul role="list" class="mt-4 flex items-center space-x-6">
              <li>
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://harmony-livingcare.web.app/communities/${property.ID}/&t=${encodeURIComponent('Check out this property!')}`" class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500" target="_blank">
                  <span class="sr-only">Share on Facebook</span>
                  <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <!-- Add more social share buttons here -->
            </ul>
          </div>

          <NuxtLink :to="`/communities/${property.ID}/schedule`" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Schedule a discovery call
          </NuxtLink>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ property.description }}</p>
            </div>
          </div>

          <div v-if="property.nearby_hospitals.length" class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Nearby Medical Facilities</h3>
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="hospital in displayedHospitals" :key="hospital.name" class="text-gray-400">
                  <span class="text-gray-600">
                    <strong>{{ hospital.name }}</strong> - Distance: {{ hospital.distance }} miles
                  </span>
                </li>
              </ul>
              <button 
                v-if="hasMoreHospitals" 
                @click="showMoreHospitals" 
                class="mt-4 text-sm font-medium text-red-600 hover:text-red-500"
              >
                See More
              </button>
            </div>
          </div>

          <div v-if="property.amenities.length" class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Amenities</h3>
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="(amenity, index) in property.amenities" :key="index" class="text-gray-400">
                  <span class="text-gray-600">
                    <strong>{{ amenity }}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map section -->
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-lg font-medium text-gray-900">Location</h2>
      <div class="w-full h-[50vh] mt-8 lg:mt-0">
        <div id="map" class="h-full border border-gray-300 shadow-sm rounded-md"></div>
      </div>
    </div>

    <FindContact/>

    <ModalCarousel
      :showModal="isModalOpen"
      :images="property.images"
      :startIndex="selectedImageIndex"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { usePropertiesStore } from '~/store/DataStore'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const route = useRoute()
const store = usePropertiesStore()
const nuxtApp = useNuxtApp()
const config = useRuntimeConfig()
const mapboxgl = nuxtApp.mapboxgl
const access_token = config.public.MAPBOX_API_TOKEN


const isModalOpen = ref(false)
const selectedImageIndex = ref(0)




await useAsyncData('property', () => store.find(route.params.id))

const property = computed(() => ({
  ...store.property,
  nearby_hospitals: store.property.nearby_hospitals ? JSON.parse(store.property.nearby_hospitals) : [],
  images: store.property.images.length ? JSON.parse(store.property.images) : [],
  amenities: store.property.amenities ? JSON.parse(store.property.amenities) : [],
}))


const sortedHospitals = computed(() => {
  return property.value.nearby_hospitals.slice().sort((a, b) => b.rating - a.rating)
})

let map = {}
let marker = null
const hospitalMarkers = ref([])

const initMap = () => {
  mapboxgl.accessToken = access_token
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [property.value.longitude, property.value.latitude],
    zoom: 14,
    touchZoomRotate: {around: 'center'},
    scrollZoom: {around: 'center'},
  })

  map.on('load', () => {
    addPropertyMarker()
    addHospitalsMarker()
  })
}

const addPropertyMarker = () => {
  if (marker) marker.remove()
  marker = new mapboxgl.Marker({ color: '#bb2b2b' })
    .setLngLat([property.value.longitude, property.value.latitude])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm mb-1">${property.value.address}</h3>
            <p class="text-xs">Beds: ${property.value.bedrooms}, Baths: ${property.value.bathrooms}</p>
          </div>
        `)
    )
    .addTo(map)
}

const addHospitalsMarker = () => {
  hospitalMarkers.value.forEach(marker => marker.remove())
  hospitalMarkers.value = []

  property.value.nearby_hospitals.forEach((hospital) => {
    const el = document.createElement('div')
    el.className = 'custom-marker hospital-marker'
    el.style.backgroundColor = '#bb2b2b'
    el.style.width = '20px'
    el.style.height = '20px'
    el.style.borderRadius = '50%'
    el.style.border = '2px solid #FFFFFF'

    // Create a comprehensive query string for Google Maps
    const queryString = `${hospital.name}, ${hospital.address}, ${hospital.latitude}, ${hospital.longitude}`.trim()
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryString)}`

    const hospitalMarker = new mapboxgl.Marker(el)
      .setLngLat([hospital.longitude, hospital.latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 20 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-sm mb-1">${hospital.name}</h3>
              <p class="text-xs">${hospital.address}</p>
              <p class="text-xs">Distance: ${hospital.distance} miles</p>
              <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-blue-600 hover:text-blue-800 mt-1 block">View on Google Maps</a>
            </div>
          `)
      )
      .addTo(map)

    hospitalMarkers.value.push(hospitalMarker)
  })

  const bounds = new mapboxgl.LngLatBounds()
  bounds.extend([property.value.longitude, property.value.latitude])
  property.value.nearby_hospitals.forEach(hospital => {
    bounds.extend([hospital.longitude, hospital.latitude])
  })
  map.fitBounds(bounds, { padding: 50 })
}

function openModal(index) {
  selectedImageIndex.value = index
  isModalOpen.value = true
}

// New code for "See More" functionality
const initialHospitalCount = 5
const hospitalIncrement = 5
const displayedHospitalCount = ref(initialHospitalCount)

const displayedHospitals = computed(() => {
  return sortedHospitals.value.slice(0, displayedHospitalCount.value)
})

const hasMoreHospitals = computed(() => {
  return displayedHospitalCount.value < sortedHospitals.value.length
})

const showMoreHospitals = () => {
  displayedHospitalCount.value = Math.min(
    displayedHospitalCount.value + hospitalIncrement,
    sortedHospitals.value.length
  )
}

onMounted(() => {
  initMap()
})
</script>