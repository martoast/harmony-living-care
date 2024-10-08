<template>
    <div class="mx-auto max-w-7xl my-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      <div v-for="(action, actionIdx) in actions" :key="action.title" :class="[
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-400'
      ]">
        <div>
          <span :class="[action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white']">
            <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-gray-900">
            <a :href="action.href" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              {{ action.title }}
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ action.description }}</p>
        </div>
        <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    MagnifyingGlassIcon,
    DocumentTextIcon,
    ChatBubbleBottomCenterTextIcon,
    HeartIcon,
    CurrencyDollarIcon
  } from '@heroicons/vue/24/outline'
  
  const actions = [
    {
      title: 'Find a Community',
      href: '/communities/',
      icon: MagnifyingGlassIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      description: 'Discover our Harmony Homecare communities near you. Find the perfect place for you or your loved ones to call home.'
    },
    {
      title: 'Explore Life at Harmony Homecare',
      href: '/life-at-harmony',
      icon: HeartIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      description: 'Discover the vibrant lifestyle, engaging activities, and compassionate care that define life at Harmony Homecare.'
    },
    {
      title: 'Invest with us',
      href: '/invest',
      icon: CurrencyDollarIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      description: 'Learn about investment opportunities with Harmony Homecare. Join us in our mission to provide exceptional senior care.'
    },
    {
      title: 'Contact us',
      href: '/#inquiry',
      icon: ChatBubbleBottomCenterTextIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      description: "Don't hesitate to reach out, out team is always ready so assist you with any questions or concerns."
    },
  ]
  </script>