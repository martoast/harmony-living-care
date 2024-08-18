<template>
    <div>
      <CalendlyInlineWidget v-bind="options" />
    </div>
  </template>

<script setup>

import { usePropertiesStore } from '~/store/DataStore'

definePageMeta({
    middleware: ["auth"]
})

const route = useRoute()
const store = usePropertiesStore()
    
await useAsyncData('property', () => store.find(route.params.id))

const property = computed(() => ({
  ...store.property
}))

const user = useCurrentUser()

const options = computed(() => ({
  url: `https://calendly.com/contact-harmonylivingcare/schedule-a-tour?primary_color=ef4444` +
       `&email=${encodeURIComponent(user.value.email)}` +
       `&a1=${encodeURIComponent(`I'm interested in ${property.value.address}`)}`,
}))
</script>