<template>
  <div>
    <div class="isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-red-500">Discover Memory Care</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Compassionate Care for Alzheimer's and Dementia</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Our memory care communities provide a nurturing environment and specialized care for those living with Alzheimer's and other forms of dementia, ensuring a higher quality of life and peace of mind for families.</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/memory2.jpeg" alt="Caring staff member interacting with memory care resident" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>Our memory care program features a person-centered approach designed to help your loved one feel a sense of belonging and purpose while preserving their sense of self. We provide a secure, apartment-like environment that feels like home, with 24/7 staff support.</p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Personalized Care.</strong> We offer consistent care assignments and tailor our approach to each resident's unique needs and abilities.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Daily Path of Engagement.</strong> Our research-based activities encourage the use of current skills and foster a sense of purpose and achievement.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Safe and Secure Environment.</strong> Our communities are designed to provide safety while promoting independence and reducing confusion.</span>
                </li>
              </ul>
              <p class="mt-8">We're proud that our Clare Bridge memory care program is recognized by the Alzheimer's Association® for incorporating evidence-based Dementia Care Practice Recommendations in areas such as person-centered care, assessment and care planning, and activities of daily living.</p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Is Memory Care Right for Your Loved One?</h2>
              <p class="mt-6">If you're considering memory care for a family member, you're not alone. Our compassionate team is here to help you understand your options and make the best decision for your loved one. We offer support throughout the transition, ensuring that both you and your family member feel comfortable and cared for every step of the way.</p>
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