<template>
    <div>
      <Hero/>
      <FindContact/>
      
      <Stats id="about"/>
      
      <Mission/>
      
      <Features2 id="services"/>
      <Communities id="communities" :itemsPerPage="3"/>
      <CTA id="cta"/>
      <FAQ id="faq"/>
      <!-- <Contact id="contact"/> -->
    </div>
</template>

<script setup>
import Communities from '~/components/Communities.vue';

    const nuxtApp = useNuxtApp()

    const config = useRuntimeConfig()

    const mapboxgl = nuxtApp.mapboxgl

    const access_token = config.public.MAPBOX_API_TOKEN

    let  map = {}

    const map_config = {
                style: "mapbox://styles/mapbox/streets-v12",
                zoom: 3,
                pitch: 0,
                bearing: 0,
                center: [-100.486052, 37.830348],
                dragPan: false,
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
            dragPan: map_config.dragPan,
            antialias: true,
        })

        map.scrollZoom.disable();

        const statesWithBusiness = ["06", "48", "12", "01", "04"] // Example state IDs for California, Texas, Florida

        map.on('load', () => {
            map.addSource('states', {
                'type': 'geojson',
                'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
            })

            map.addLayer({
                'id': 'state-fills',
                'type': 'fill',
                'source': 'states',
                'layout': {},
                'paint': {
                    'fill-color': [
                        'match',
                        ['get', 'STATE_ID'],
                        ...statesWithBusiness.flatMap(id => [id, '#bb2b2b']),
                        '#FFFFFF'
                    ],
                    'fill-opacity': 0.5
                }
            })

            map.addLayer({
                'id': 'state-borders',
                'type': 'line',
                'source': 'states',
                'layout': {},
                'paint': {
                    'line-color': '#f58787',
                    'line-width': 2
                }
            })
        })
    }

    onMounted(() => {
    initMap();
        
    });


</script>
  