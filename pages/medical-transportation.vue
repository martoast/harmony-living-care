<template>
  <div>
    <div class="relative h-screen">
      <img
        src="/ambulance-large.jpg"
        alt="Ambulance"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative h-full flex items-center">
        <div class="container mx-auto px-4">
          <div class="w-full md:w-1/2">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Medical Transportation
            </h1>
            <p class="text-xl text-white mb-8">
              Reliable, compassionate, and safe transport for all your medical
              needs
            </p>
            <a
              href="#request-transport"
              class="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            >
              Request Transport
            </a>
          </div>
        </div>
      </div>
    </div>

    <MedicalTransportationServices />
    <MedicalTrasportationForm id="request-transport" />

    <div class="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <div class="flex flex-col items-center mb-6">
          <div class="w-full h-[50vh] mt-8 lg:mt-0">
            <div
              id="map"
              class="h-full border border-gray-300 shadow-sm rounded-lg"
            ></div>
          </div>
        </div>
    </div>

    
    
    <Communities id="communities" :itemsPerPage="3" />

    <MedicalTransportationFAQ />
  </div>
</template>

<script setup>
useSeoMeta({
  title: () => `Medical transportation | Harmony Living Care`,
  ogTitle: () => `Medical transportation | Harmony Living Care`,
  description: () =>
    "Reliable, compassionate, and safe transport for all your medical needs",
  ogDescription: () =>
    "Reliable, compassionate, and safe transport for all your medical needs",
  ogImage: () => "/ambulance-service1.png",
  twitterCard: () => "summary_large_image",
  googleSiteVerification: "ByJ5-rnCYL33Ld2dFoqsnAIRz2LmOc58iB52O8eOaPQ",
});

const nuxtApp = useNuxtApp();

const config = useRuntimeConfig();

const mapboxgl = nuxtApp.mapboxgl;

const access_token = config.public.MAPBOX_API_TOKEN;

let map = {};

const map_config = {
  style: "mapbox://styles/mapbox/streets-v12",
  zoom: 3,
  pitch: 0,
  bearing: 0,
  center: [-100.486052, 37.830348],
  dragPan: false,
};

const initMap = () => {
  mapboxgl.accessToken = access_token;

  // Adjust zoom based on screen width
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768; // Define your mobile breakpoint

  map_config.zoom = isMobile ? 2 : 3; // Adjust zoom levels

  map = new mapboxgl.Map({
    container: "map",
    style: map_config.style,
    zoom: map_config.zoom,
    pitch: map_config.pitch,
    bearing: map_config.bearing,
    center: map_config.center,
    dragPan: map_config.dragPan,
    antialias: true,
  });

  map.scrollZoom.disable();

  const statesWithBusiness = ["06", "48", "12", "01", "04"]; // Example state IDs for California, Texas, Florida

  map.on("load", () => {
    map.addSource("states", {
      type: "geojson",
      data: "https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson",
    });

    map.addLayer({
      id: "state-fills",
      type: "fill",
      source: "states",
      layout: {},
      paint: {
        "fill-color": [
          "match",
          ["get", "STATE_ID"],
          ...statesWithBusiness.flatMap((id) => [id, "#bb2b2b"]),
          "#FFFFFF",
        ],
        "fill-opacity": 0.5,
      },
    });

    map.addLayer({
      id: "state-borders",
      type: "line",
      source: "states",
      layout: {},
      paint: {
        "line-color": "#f58787",
        "line-width": 2,
      },
    });
  });
};

onMounted(() => {
  initMap();
});
</script>
