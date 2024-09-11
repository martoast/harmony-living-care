<template>
  <!-- Content section -->
  <div class="mx-auto my-24 max-w-7xl px-6 sm:mt-22 lg:px-8">
    <div class="mx-auto flex max-w-2xl flex-col items-start justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
      <div class="w-full lg:max-w-lg lg:flex-auto">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Career search</h2>
        <p class="mb-6 mt-2 text-xl leading-8 text-gray-600">If you have a heart for serving others and want to make a meaningful difference in the lives of seniors, we'd love to welcome you to our family.</p>
        <!-- Search input -->
        <div class="my-6">
          <label for="search" class="sr-only">Search jobs</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              v-model="searchTerm"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-400 focus:border-red-400"
              placeholder="Search for jobs by role or location..."
            >
          </div>
        </div>

        <!-- <img src="/jobs.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]" /> -->
        <div class="w-full h-[50vh] mt-8 lg:mt-0">
          <div id="map" class="h-full border border-gray-300 shadow-sm rounded-lg"></div>
        </div>
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="font-bold"><span class="text-red-500 mb-3">{{filteredJobs.length }}</span> Live Results </h3>
        
        <ul class="-my-8 divide-y divide-gray-100">
          <li v-for="opening in filteredJobs" :key="opening.id" class="py-8">
            <div class="relative rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
              <dl class="flex flex-wrap gap-x-3">
                <dt class="sr-only">Role</dt>
                <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                  <a :href="'/careers/apply?id=' + opening.id">
                    {{ opening.role }}
                    <span class="absolute inset-0" aria-hidden="true" />
                  </a>
                </dd>
                <dt class="sr-only">Description</dt>
                <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">{{ opening.description }}</dd>
                <dt class="sr-only">Salary</dt>
                <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">{{ opening.salary }}</dd>
                <dt class="sr-only">Location</dt>
                <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                  <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  {{ opening.location }}
                </dd>
                <dt class="sr-only">Job Type</dt>
                <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                  <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  {{ opening.type }}
                </dd>
              </dl>
              <div class="mt-4 flex justify-end">
                <p class="text-sm font-semibold leading-6 text-red-500 hover:text-red-400">
                  Apply now! <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { $modelsRef } = useNuxtApp();

const { data: jobs } = useCollection($modelsRef)

const searchTerm = ref('')

const filteredJobs = computed(() => {
  if (!jobs.value || jobs.value.length === 0) return []
  
  if (!searchTerm.value) return jobs.value
  
  const lowercaseSearch = searchTerm.value.toLowerCase()
  return jobs.value.filter(job => 
    (job.type && job.type.toLowerCase().includes(lowercaseSearch)) ||
    (job.location && job.location.toLowerCase().includes(lowercaseSearch)) ||
    (job.role && job.role.toLowerCase().includes(lowercaseSearch))
  )
})
</script>