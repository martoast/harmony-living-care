<template>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-red-500">Why Choose Assisted Living at Harmony Homecare</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Harmony Homecare Difference</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { UserGroupIcon, HeartIcon, HomeIcon, CakeIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'Vibrant Community',
      description:
        "Embrace a life full of friendships and engaging activities. Our diverse calendar of events ensures you'll always find something exciting to do and someone wonderful to share it with.",
      icon: UserGroupIcon,
    },
    {
      name: 'Personalized Care',
      description:
        "Your well-being is our priority. Our dedicated team crafts individualized care plans that evolve with your needs, ensuring you receive the perfect balance of support and independence.",
      icon: HeartIcon,
    },
    {
      name: 'Comfort & Elegance',
      description:
        "Find your perfect haven in our stylish suites and inviting common areas. We've created spaces that blend comfort with sophistication, allowing you to truly feel at home.",
      icon: HomeIcon,
    },
    {
      name: 'Culinary Delights',
      description:
        "Savor the joys of fine dining every day. Our talented chefs prepare nutritious, restaurant-quality meals that cater to your tastes and dietary needs, using fresh, seasonal ingredients.",
      icon: CakeIcon,
    },
  ]
  </script>