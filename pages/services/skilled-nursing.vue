<template>
    <div>
        <div class="isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-red-500">Discover Skilled Nursing</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Advanced Care in a Home-Like Setting</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Our skilled nursing facilities offer comprehensive care for both short-term rehabilitation and long-term medical needs, providing advanced medical resources in a comfortable, home-like environment.</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/helper.jpg" alt="Skilled nursing staff assisting a resident with physical therapy" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>Whether you're recovering from surgery, managing a chronic condition, or need long-term care, our skilled nursing facilities provide the comprehensive care you need. Our team of healthcare professionals is available 24/7 to ensure you receive the highest quality of care in a comfortable setting.</p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Advanced Medical Care.</strong> Our facilities offer a wide range of healthcare services with trained care teams available seven days a week.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Rehabilitation Services.</strong> We provide physical, occupational, and speech therapy to help you recover and regain independence.</span>
                </li>
                <li class="flex gap-x-3">
                  <PlusIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Comfortable Environment.</strong> Enjoy on-site amenities and a warm, welcoming atmosphere that feels like home during your stay.</span>
                </li>
              </ul>
              <p class="mt-8">Our skilled nursing facilities cater to both short-term and long-term care needs. Whether you're recovering from joint replacement surgery, a stroke, or managing chronic conditions, we're here to provide the specialized care you need in a supportive environment.</p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Personalized Care Plans</h2>
              <p class="mt-6">We understand that each person's care needs are unique. That's why we work closely with you, your family, and your healthcare providers to create a personalized care plan. Our goal is to help you recover, regain independence, and improve your quality of life, whether you're here for a short stay or long-term care.</p>
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