<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comfort and Care in Assisted Living</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Discover the features and amenities that make our assisted living facilities feel like home while providing the care and support you need.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-red-500">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon, UserGroupIcon, HeartIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Comfortable Living Spaces',
    description:
      'Enjoy private or shared apartments designed for safety and comfort, featuring emergency call systems and accessible bathrooms to ensure a secure living environment.',
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'Social Activities and Events',
    description:
      'Engage in a variety of social activities, from group outings and exercise classes to hobby clubs and educational programs, fostering a vibrant community atmosphere.',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Personalized Care Services',
    description:
      'Receive tailored assistance with daily living activities, medication management, and health monitoring from our compassionate and skilled care staff available 24/7.',
    href: '#',
    icon: HeartIcon,
  },
]
</script>