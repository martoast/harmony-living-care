<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col first-line:mb-6">
        <div class="pb-6">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Communities</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Explore the different communities and find the one that is right for you.</p>
        </div>
      </div>

      <!-- Dropdown for state selection -->
      <div class="mb-6 max-w-lg">
        <select
          id="state"
          name="state"
          v-model="selectedState"
          @change="handleStateChange"
          class="block w-full rounded-md border-gray-300 px-4 py-3 focus:border-red-500 focus:ring-red-500 sm:text-sm [&_*]:text-black"
        >
          <option value="">Select a state</option>
          <option value="alabama">Alabama</option>
          <option value="arizona">Arizona</option>
          <option value="california">California</option>
          <option value="florida">Florida</option>
          <option value="texas">Texas</option>
          
        </select>
      </div>

      <!-- Property list -->
      <div v-if="properties.length > 0" class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        <div
          v-for="property in properties"
          :key="property.ID"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm"
        >
          <div class="aspect-w-3 aspect-h-2 bg-gray-200 sm:aspect-none sm:h-64 group-hover:opacity-75">
            <img
              :src="getModifiedImageUrl(property.images[0])"
              alt="Main image of the property"
              class="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
          </div>
          <div class="flex flex-1 flex-col p-4">
            <h3 class="text-lg font-bold text-gray-900">
              <NuxtLink :to="`/communities/${property.ID}/`">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ property.address }}
              </NuxtLink>
            </h3>
            
            <div class="mt-2 flex flex-row items-center text-sm text-gray-600">
              <span class="inline-block h-5 w-5 text-gray-600 mr-1" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
                </svg>
              </span>
              {{ property.bedrooms }} bed
              <span class="mx-1">•</span>
              <span class="inline-block h-5 w-5 text-gray-600 mr-1" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"/>
                </svg>
              </span>
              {{ property.bathrooms }} bath
              <div v-if="property.year_built">
                <span class="mx-1">• Year built</span>
                {{ property.year_built }}
              </div>
            </div>
          
            <div class="mt-4 flex justify-end">
              <NuxtLink
                :to="`/communities/${property.ID}`"
                class="text-red-500 font-semibold hover:text-red-400"
              >
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- No properties found message -->
      <div v-else class="text-center py-12">
        <h3 class="text-lg font-medium text-gray-900">No properties found</h3>
        <p class="mt-2 text-sm text-gray-500">
          We currently don't have any properties in that state. Please try selecting a different state.
        </p>
        <button
          @click="resetFilters"
          class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Reset Filters
        </button>
      </div>

      <!-- Pagination controls -->
      <div v-if="totalPages > 1" class="mt-8 flex justify-between items-center">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 text-white bg-red-500 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p class="text-gray-900">
          Page {{ currentPage }} of {{ totalPages }}
        </p>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 text-white bg-red-500 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { usePropertiesStore } from '~/store/DataStore'
import { useRoute, useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

useServerSeoMeta({
  title: 'Harmony HomeCare LLC',
  ogTitle: 'Harmony HomeCare LLC',
  author: 'Alex Martos',
  charset: 'utf-8',
  description: "Making Home a Haven of Health and Happiness",
  ogDescription: "Making Home a Haven of Health and Happiness",
  robots: 'index, follow',
  googleSiteVerification: '',
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  ogImage: '/public/main-logo.svg',
  ogLocaleAlternate: ['es_LA'],
  ogType: 'website',
  viewport: 'width=device-width, initial-scale=1',
})

const itemsPerPage = ref(10);

const route = useRoute();
const router = useRouter();
const store = usePropertiesStore();
const config = useRuntimeConfig();

const currentPage = ref(1);
const selectedState = ref('');
const googleMapsApiKey = config.public.GOOGLE_MAPS_API_KEY;

const { data, pending, error, execute } = useLazyAsyncData(
  'assistedLivingProperties',
  () => store.get(currentPage.value, itemsPerPage.value, null, true, selectedState.value)
);

const refreshData = async () => {
  await execute();
};

const totalPages = computed(() => Math.ceil(store.total / itemsPerPage.value));

const properties = computed(() => store.properties.map(property => ({
  ...property,
  images: property.images.length ? JSON.parse(property.images) : []
})));

watch(() => route.query, async (newQuery) => {
  if (newQuery.address !== selectedState.value) {
    selectedState.value = newQuery.address || '';
    currentPage.value = 1;
    await refreshData();
  }
}, { immediate: true });

const handleStateChange = async () => {
  currentPage.value = 1;
  await router.push({ query: { address: selectedState.value || undefined } });
  await refreshData();
};

const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    await refreshData();
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await refreshData();
  }
};

const resetFilters = async () => {
  selectedState.value = '';
  currentPage.value = 1;
  await router.push({ query: {} });
  await refreshData();
};

const getModifiedImageUrl = (url) => {
  if (url && url.startsWith('https://maps.googleapis.com/')) {
    let modifiedUrl = url.split('&signature=')[0];
    const urlParts = modifiedUrl.split('&');
    const filteredParts = urlParts.map(part => {
      if (part.startsWith('key=')) {
        return `key=${googleMapsApiKey}`;
      } else if (part.startsWith('client=')) {
        return null;
      }
      return part;
    }).filter(Boolean);
    return filteredParts.join('&');
  }
  return url;
};
</script>