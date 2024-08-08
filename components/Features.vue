<template>
    <div class="bg-white">
      <!-- Header -->
      <div class="relative bg-gray-800 pb-32">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="/banner.webp" alt="" />
          <div class="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Our Services</h1>
          <p class="mt-6 max-w-3xl text-xl text-white">Comprehensive care tailored to your needs.</p>
        </div>
      </div>
  
      <!-- Overlapping cards -->
      <section class="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          <div v-for="link in supportLinks" :key="link.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
            <div class="relative flex-1 px-6 pb-8 pt-16 md:px-8">
              <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-red-500 p-5 shadow-lg">
                <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
              <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
            </div>
            <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
              <a :href="link.href" class="text-base font-medium text-red-500 hover:text-red-400">View more<span aria-hidden="true"> &rarr;</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/vue/24/outline'
  
  const supportLinks = [
    {
      name: 'Hospice Services',
      href: '#',
      description:
        'Compassionate end-of-life care and support.',
      icon: PhoneIcon,
    },
    {
      name: 'Assisted Living',
      href: '#',
      description:
        'Comfortable, safe, and engaging environments.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Group Home',
      href: '#',
      description:
        'Personalized care in a community setting.',
      icon: NewspaperIcon,
    }
  ]
  </script>