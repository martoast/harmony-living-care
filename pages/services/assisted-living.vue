<template>
    <div>
      <div class="isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-red-500">Discover Assisted Living</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Better Quality of Life</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Experience a life rich in quality care, genuine friendships, and engaging activities. Our assisted living communities are designed to provide the perfect balance of independence and support.</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/together.jpg" alt="Senior residents enjoying community activities" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>Our assisted living communities offer a personalized approach to care, ensuring that you receive the right level of support while maintaining your independence. We focus on creating a warm, welcoming environment where you can thrive and enjoy life to the fullest.</p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Personalized Care Plans.</strong> Our team works with you to develop a tailored care plan that addresses your specific needs and preferences.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Social Engagement.</strong> Enjoy a full calendar of events and activities designed to foster friendships and keep you engaged.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Comfortable Living Spaces.</strong> Our communities offer a range of apartment styles to suit your needs and preferences.</span>
                </li>
              </ul>
              <p class="mt-8">At our assisted living communities, we believe in empowering you to live your best life. Our dedicated staff is available 24/7 to provide assistance with daily tasks, medication management, and more, allowing you to focus on the things you enjoy most.</p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Peace of Mind for You and Your Family</h2>
              <p class="mt-6">Choosing assisted living is a big decision, and we're here to support you every step of the way. Our communities provide a safe, nurturing environment where you can maintain your independence while having access to the care and support you need. Family members can rest easy knowing their loved ones are in good hands, receiving quality care and enjoying a fulfilling lifestyle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CTA/>
    </div>
  </template>
  
  <script setup>
  import { PlusIcon } from '@heroicons/vue/24/solid'
  </script>