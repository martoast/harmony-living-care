<template>
  <div class="bg-white">
    <div ref="rootElement" class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Call today.</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Discover how our assisted living community can provide the perfect balance of independence and support for you or your loved one. Our dedicated staff and vibrant environment are ready to welcome you.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="tel:+1(571)458-1036" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                    <PhoneIcon class="-ml-0.5 h-5 w-5" aria-hidden="true"></PhoneIcon>
                    {{options.text}}
                  </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { PhoneIcon } from '@heroicons/vue/20/solid'

const rootElement = ref(null)
    const options = {
        url: 'https://calendly.com/e_steban/discovery-call?primary_color=ef4444', 
        text: '(571) 458-1036', 
    }

</script>