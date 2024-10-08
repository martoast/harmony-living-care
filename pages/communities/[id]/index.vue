<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div class="flex items-center">
              <NuxtLink
                class="mr-2 text-sm font-medium text-red-400 underline"
                to="/communities"
              >
                Communities
              </NuxtLink>

              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <span aria-current="page" class="font-medium text-gray-500">{{
              property.address
            }}</span>
          </li>
        </ol>
      </nav>

      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 cursor-pointer"
      >
        <div
          @click="openModal(0)"
          v-if="property.images.length === 1"
          class="overflow-hidden rounded-lg"
        >
          <img
            :src="property.images[0]"
            :alt="property.address"
            class="w-full h-[400px] object-cover object-center"
          />
        </div>
        <div v-else class="lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div
            @click="openModal(0)"
            class="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block"
          >
            <img
              :src="property.images[0]"
              :alt="property.address"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div
              @click="openModal(1)"
              class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"
            >
              <img
                :src="property.images[1]"
                :alt="property.address"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div
              @click="openModal(2)"
              class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"
            >
              <img
                :src="property.images[2]"
                :alt="property.address"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div
            @click="openModal(3)"
            class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg relative"
          >
            <img
              :src="property.images[3]"
              :alt="property.address"
              class="h-full w-full object-cover object-center"
            />
            <div
              class="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
            >
              <span class="text-white text-xl font-semibold"
                >Click to view</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Property info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-12 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ property.address }}
          </h1>
        </div>

        <!-- Property details -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Property information</h2>
          <p class="text-3xl tracking-tight text-gray-900">
            Starting at
            {{ formatNumberToCurrency(property.assisted_living_rate) }}/ month
          </p>

          <!-- Property features -->
          <div class="mt-6">
            <h3 class="sr-only">Features</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ property.bedrooms }} beds | {{ property.bathrooms }} baths |
                {{ property.living_area }} sq ft
              </p>
            </div>
          </div>

          <div class="mt-8 space-y-6">
            <!-- Social Sharing Section -->
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">
                Share this community
              </h3>
              <div class="flex flex-wrap gap-3">
                <a
                  v-for="(social, index) in socialShares"
                  :key="index"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  :aria-label="`Share on ${social.name}`"
                >
                  <component :is="social.icon" class="h-5 w-5 text-gray-700" />
                </a>
                <button
                  @click="copyToClipboard"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 relative"
                  aria-label="Copy link to clipboard"
                >
                  <ClipboardIcon class="h-5 w-5 text-gray-700" />
                  <span
                    v-if="showCopiedTooltip"
                    class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2"
                  >
                    Copied!
                  </span>
                </button>
              </div>
            </div>

            <!-- Primary CTA - Apply Now -->
            <div class="space-y-2">
              <NuxtLink
                :to="`/communities/${property.ID}/apply`"
                class="flex w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                <ClipboardIcon class="w-5 h-5 mr-2" />
                Apply Now as a Resident
              </NuxtLink>
              <div class="text-center">
                <NuxtLink
                  :to="`/careers`"
                  class="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 underline"
                >
                  Looking for a job? View our career opportunities
                </NuxtLink>
              </div>
            </div>

            <!-- Secondary CTA - Schedule a Call -->
            <NuxtLink
              :to="`/communities/${property.ID}/schedule`"
              class="flex w-full items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              <CalendarIcon class="w-5 h-5 mr-2 text-gray-400" />
              Schedule a Discovery Call
            </NuxtLink>

            <!-- Review CTA -->
            <a
              :href="
                property.google_review_url ? property.google_review_url : '#'
              "
              target="_blank"
              rel="noopener noreferrer"
              class="flex w-full items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <StarIcon class="w-5 h-5 mr-2 text-yellow-400" />
              Leave a Google Review
            </a>
          </div>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ property.description }}</p>
            </div>
          </div>

          <div v-if="property.amenities.length" class="mt-10">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Amenities</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(amenity, index) in property.amenities"
                :key="index"
                class="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <component
                  :is="getAmenityIcon(amenity)"
                  class="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1"
                />
                <span class="text-sm font-medium text-gray-700">{{
                  amenity
                }}</span>
              </div>
            </div>
          </div>

          <div v-if="hospitals.length" class="mt-10">
    <h3 class="text-xl font-semibold text-gray-900 mb-6">
      Nearby Medical Facilities
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="hospital in paginatedHospitals"
        :key="hospital.name.text"
        class="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
      >
        <div class="flex items-start">
          <BuildingOffice2Icon
            class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1"
          />
          <div>
            <h4 class="text-sm font-medium text-gray-900">
              {{ hospital.name.text }}
            </h4>
            <p
              v-if="hospital.rating"
              class="text-sm text-gray-500 mt-1"
            >
              Rating: {{ hospital.rating }}
            </p>
            <a
              :href="getGoogleMapsUrl(hospital)"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Pagination controls -->
    <div class="mt-6 flex justify-between items-center">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span class="text-sm text-gray-700">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
        </div>
      </div>
    </div>

    <!-- Map section -->
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-lg font-medium text-gray-900">Location</h2>
      <div class="w-full h-[50vh] mt-8 lg:mt-0">
        <div
          id="map"
          class="h-full border border-gray-300 shadow-sm rounded-md"
        ></div>
      </div>
    </div>

    <FindContact />

    <FAQ />

    <ModalCarousel
      :showModal="isModalOpen"
      :images="property.images"
      :startIndex="selectedImageIndex"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { usePropertiesStore } from "~/store/DataStore";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

import {
  HeartIcon,
  HomeIcon,
  UsersIcon,
  SparklesIcon,
  ClockIcon,
  TruckIcon,
  SunIcon,
  CheckIcon,
  BuildingOffice2Icon,
  ClipboardIcon,
  StarIcon,
  CalendarIcon,
} from "@heroicons/vue/20/solid";

const getAmenityIcon = (amenity) => {
  const amenityLower = amenity.toLowerCase();
  switch (true) {
    case amenityLower.includes("fully furnished"):
      return HeartIcon;
    case amenityLower.includes("in house staff"):
      return UsersIcon;
    case amenityLower.includes("housekeeping"):
      return SparklesIcon;
    case amenityLower.includes("24/7 emergency"):
      return ClockIcon;
    case amenityLower.includes("walk"):
      return SunIcon;
    case amenityLower.includes("spaciou"):
      return HomeIcon;
    case amenityLower.includes("24/7 ems ambulance"):
      return TruckIcon;
    default:
      return CheckIcon;
  }
};

const route = useRoute();
const store = usePropertiesStore();
const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();
const mapboxgl = nuxtApp.mapboxgl;
const access_token = config.public.MAPBOX_API_TOKEN;

const showCopiedTooltip = ref(false);

const isModalOpen = ref(false);
const selectedImageIndex = ref(0);

const attractions = ref([]);

await useAsyncData("property", () => store.find(route.params.id));

const property = computed(() => ({
  ...store.property,
  images: store.property.images.length ? JSON.parse(store.property.images) : [],
  amenities: store.property.amenities
    ? JSON.parse(store.property.amenities)
    : [],
}));

const currentPage = ref(1);
const itemsPerPage = 6; // Adjust this number to change items per page

const hospitals = computed(() => {
  return attractions.value.filter(attraction => 
    attraction.types.includes('hospital') || 
    attraction.types.includes('doctor')
  );
});

const totalPages = computed(() => Math.ceil(hospitals.value.length / itemsPerPage));

const paginatedHospitals = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return hospitals.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};


const getGoogleMapsUrl = (hospital) => {
  const query = encodeURIComponent(hospital.name.text);
  const lat = hospital.geometry.location.lat;
  const lng = hospital.geometry.location.lng;
  return `https://www.google.com/maps/search/?api=1&query=${query}&query_place_id=${lat},${lng}`;
};

useSeoMeta({
  title: () => `${property.value?.address} | Harmony Living Care`,
  ogTitle: () => `${property.value?.address} | Harmony Living Care`,
  description: () => property.value?.description,
  ogDescription: () => property.value?.description,
  ogImage: () => property.value?.images[0],
  twitterCard: () => "summary_large_image",
  googleSiteVerification: "ByJ5-rnCYL33Ld2dFoqsnAIRz2LmOc58iB52O8eOaPQ",
});

let map = {};
let marker = null;

const initMap = () => {
  mapboxgl.accessToken = access_token;
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [property.value.longitude, property.value.latitude],
    zoom: 12,
    touchZoomRotate: { around: "center" },
    scrollZoom: { around: "center" },
  });

  map.on("load", () => {
    addPropertyMarker();
    if (attractions.value.length > 0) {
      attractions.value.forEach((attraction) => {
        addAttractionMarker(attraction);
      });
    }
  });
};

const addPropertyMarker = () => {
  if (marker) marker.remove();
  marker = new mapboxgl.Marker({ color: "#bb2b2b" })
    .setLngLat([property.value.longitude, property.value.latitude])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm mb-1">${property.value.address}</h3>
            <p class="text-xs">Beds: ${property.value.bedrooms}, Baths: ${property.value.bathrooms}</p>
          </div>
        `)
    )
    .addTo(map);
};

const addAttractionMarker = (attraction) => {
  const { lat, lng } = attraction.geometry.location;
  const placeTypes = attraction.types;

  let placeType = "Other";
  let iconHtml = "";
  if (placeTypes.includes("hospital")) {
    placeType = "Hospital";
    // Use universal 'H' symbol for hospitals
    iconHtml = `
        <div style="background-color: #FF0000; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
          <span style="color: white; font-weight: bold; font-size: 16px;">H</span>
        </div>
      `;
  } else if (placeTypes.includes("shopping_mall")) {
    placeType = "Shopping Mall";
    // Use ShoppingBagIcon for shopping malls
    iconHtml = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-blue-500">
          <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
        </svg>
      `;
  }

  const el = document.createElement("div");
  el.innerHTML = iconHtml;
  el.style.width = "24px";
  el.style.height = "24px";

  new mapboxgl.Marker({ element: el })
    .setLngLat([lng, lat])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        createAttractionPopupContent(attraction, placeType)
      )
    )
    .addTo(map);
};

const createAttractionPopupContent = (attraction, placeType) => {
  return `
    <div class="p-2">
      <h3 class="text-sm font-semibold">${attraction.name.text}</h3>
      <p class="text-xs text-gray-500">Type: ${placeType}</p>
      <p class="text-xs text-gray-500">Rating: ${attraction.rating || "N/A"}</p>
    </div>
  `;
};

function openModal(index) {
  selectedImageIndex.value = index;
  isModalOpen.value = true;
}

const formatNumberToCurrency = (number) => {
  return number
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(number)
    : "";
};

const socialShares = computed(() => [
  {
    name: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=https://harmonylivingcare.com/communities/${property.ID}/`,
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
]);

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      showCopiedTooltip.value = true;
      setTimeout(() => {
        showCopiedTooltip.value = false;
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};
const fetchPropertyAndAttractions = async () => {
  await store.find(route.params.id);
  await fetchNearbyAttractions();
  initMap();
};

const fetchNearbyAttractions = async () => {
  if (property.value && property.value.latitude && property.value.longitude) {
    try {
      console.log("Fetching nearby attractions...");
      const { data, error } = await useFetch("/api/nearby-attractions", {
        params: {
          latitude: property.value.latitude,
          longitude: property.value.longitude,
        },
      });

      if (error.value) {
        console.error("Error fetching nearby attractions:", error.value);
        return;
      }

      console.log("Fetched data:", data.value);

      if (data.value && data.value.results) {
        attractions.value = data.value.results;
        console.log("Attractions set:", attractions.value);
      } else {
        console.warn("No results found in the fetched data");
      }
    } catch (error) {
      console.error("Error in fetchNearbyAttractions:", error);
    }
  } else {
    console.warn("Property data not available for fetching nearby attractions");
  }
};

// Initialize data on first load
onMounted(fetchPropertyAndAttractions);

// Re-fetch data when the route changes
watch(() => route.params.id, fetchPropertyAndAttractions);
</script>
