<template>
    <div>
        <div class="relative bg-gray-50">
      <main class="lg:relative">
        <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-6 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block xl:inline">Making Home a Haven of</span>
              {{ ' ' }}
              <span class="block text-red-500 xl:inline">Health and Happiness</span>
            </h1>
            <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                At Harmony Homecare, we transform assisted living into a nurturing haven of comfort and care. Our dedicated team ensures that every resident enjoys independence, dignity, and a vibrant community life.
            </p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-400 md:py-4 md:px-10 md:text-lg">View video</a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="/community" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-red-500 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Find a community</a>
              </div>
            </div>
          </div>
        </div>
        <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="/help3.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-red-500">Testimonials</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hear from our happy residents and their families</p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          <div v-for="testimonial in testimonials" :key="testimonial.author.handle" class="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
              <blockquote class="text-gray-900">
                <p>{{ `"${testimonial.body}"` }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                  <div class="text-gray-600">{{ testimonial.author.relation }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
    
  </template>
  
  <script setup>

const testimonials = [
  {
    body: "Moving to this assisted living community was the best decision I've made. The staff is incredibly caring, and I've made so many new friends. I feel safe, engaged, and truly at home here.",
    author: {
      name: 'Margaret Johnson',
      relation: 'Resident',
      imageUrl: '',
    },
  },
  {
    body: "The peace of mind we have knowing our mother is well-cared for is priceless. The staff goes above and beyond, and the activities keep her active and happy. We couldn't ask for a better place.",
    author: {
      name: 'Robert Thompson',
      relation: 'Son of Resident',
      imageUrl: '',
    },
  },
  {
    body: 'I was hesitant about assisted living, but this place has exceeded all my expectations. The independence I maintain, combined with the support when I need it, has greatly improved my quality of life.',
    author: {
      name: 'George Williams',
      relation: 'Resident',
      imageUrl: '',
    },
  },
  {
    body: "As a healthcare professional, I'm impressed by the level of care provided here. The staff is well-trained, compassionate, and truly dedicated to the well-being of each resident.",
    author: {
      name: 'Dr. Emily Chen',
      relation: 'Visiting Physician',
      imageUrl: '',
    },
  },
  {
    body: "The transition for my dad was smooth and the staff was incredibly supportive. He's now more active than he's been in years, participating in various programs and outings. It's wonderful to see him thriving.",
    author: {
      name: 'Sarah Martinez',
      relation: 'Daughter of Resident',
      imageUrl: '',
    },
  },
  {
    body: "I love the sense of community here. From group activities to shared meals, there's always an opportunity to socialize. The staff does an excellent job of creating a warm, family-like atmosphere.",
    author: {
      name: 'Frank Anderson',
      relation: 'Resident',
      imageUrl: '',
    },
  },
]


  </script>