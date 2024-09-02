<template>
    <div>
      <CalendlyInlineWidget v-bind="options" />
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