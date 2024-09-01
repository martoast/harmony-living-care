<template>
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-red-500">Testimonials</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hear from our happy residents and their families</p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="pt-8 sm:inline-block sm:w-full sm:px-4">
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