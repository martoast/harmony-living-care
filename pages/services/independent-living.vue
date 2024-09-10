<template>
    <div>
      <div class="isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-red-500">Discover Independent Living</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Redefine Your Retirement</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Experience a vibrant lifestyle where you can do more of what you love. Our independent living communities offer the perfect blend of freedom, social engagement, and peace of mind.</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/features2.webp" alt="Senior residents enjoying independent living activities" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>As an independent living resident, you can let go of household chores and embrace a lifestyle filled with possibilities. Whether you want to pursue new hobbies, socialize with friends, or simply relax, our communities provide the perfect setting for your ideal retirement.</p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Social Engagement.</strong> Enjoy a full calendar of events, activities, and excursions designed to foster friendships and new experiences.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Comfortable Living Spaces.</strong> Choose from a variety of pet-friendly apartments to suit your needs and preferences.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Amenities and Services.</strong> Access on-site amenities like fitness centers, salons, and concierge services for a worry-free lifestyle.</span>
                </li>
              </ul>
              <p class="mt-8">Our independent living communities are designed for seniors who can live on their own but want to enjoy a maintenance-free lifestyle. You'll have the freedom to create your own schedule while having access to support if you need it.</p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Is Independent Living Right for You?</h2>
              <p class="mt-6">Independent living might be perfect if you're ready to trade household responsibilities for true comfort, looking to downsize, or seeking more social opportunities with like-minded individuals. Our communities offer the ideal balance of independence and community, allowing you to make the most of your retirement years.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FindContact/>
    </div>
  </template>
  
  <script setup>
  import { PlusIcon } from '@heroicons/vue/24/solid'
  </script>