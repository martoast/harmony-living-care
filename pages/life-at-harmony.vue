<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-red-500">Welcome to</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Life at Harmony Homecare</h1>
      <p class="mt-6 text-xl leading-8">Experience exceptional care and comfort in our assisted living community. At Harmony Homecare, we specialize in creating a nurturing environment where residents thrive with personalized attention and engaging activities.</p>
      
      <div class="mt-10 max-w-2xl">
        <p>Our commitment to providing high-quality care and fostering a sense of community sets us apart. With a range of specialized services and a team of dedicated professionals, we ensure that every resident receives the support they need to live their best life.</p>
        
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Specialized Services</h2>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li v-for="service in services" :key="service.title" class="flex gap-x-3">
            <component :is="service.icon" class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span>
              <strong class="font-semibold text-gray-900">{{ service.title }}.</strong> {{ service.description }}
            </span>
          </li>
        </ul>
        
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why Choose Harmony Homecare?</h2>
        <p class="mt-6">At Harmony Homecare, we understand that choosing an assisted living facility is a significant decision. Here's why our residents and their families love being part of our community:</p>
        <ul class="mt-8 space-y-4 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span>Personalized care plans tailored to each resident's unique needs</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span>Engaging activities and social programs to promote well-being</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span>Comfortable, home-like environments in various settings</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span>Highly trained and compassionate staff available 24/7</span>
          </li>
        </ul>
      </div>
      
      <div v-for="service in services" :key="service.title" class="mt-16">
        <figure>
          <img class="aspect-video rounded-xl bg-gray-50 object-cover" :src="service.imageSrc" :alt="service.imageAlt" />
          <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            {{ service.title }}
          </figcaption>
        </figure>
        
        <figure class="mt-10 border-l border-red-500 pl-9">
          <blockquote class="font-semibold text-gray-900">
            <p>"{{ service.testimonial.quote }}"</p>
          </blockquote>
          <figcaption class="mt-6 flex gap-x-4">
            <img class="h-6 w-6 flex-none rounded-full bg-gray-50" :src="service.testimonial.avatarSrc" alt="" />
            <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">{{ service.testimonial.author }}</strong></div>
          </figcaption>
        </figure>
      </div>
      
      <div class="mt-16 max-w-2xl">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Join Our Harmony Homecare Family</h2>
        <p class="mt-6">Experience the warmth and support of our community. Whether you're looking for assisted living, skilled nursing, or a group home setting, Harmony Homecare is here to provide the care and comfort you deserve. Contact us today to schedule a tour and see firsthand why our residents love calling Harmony Homecare their home.</p>
      </div>
    </div>

    <CTA/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircleIcon, InformationCircleIcon, PlusIcon, HomeIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

const services = ref([
  {
    icon: PlusIcon,
    title: 'Skilled Nursing',
    description: "Our expert nurses provide comprehensive, high-quality care tailored to each resident's unique needs. With advanced training and years of experience, our nursing team ensures the highest standards of health management and personalized attention for your loved ones.",
    imageSrc: '/feature1.jpg',
    imageAlt: 'Hospice care environment',
    testimonial: {
      quote: 'The hospice team provided incredible support during my father\'s final days. Their compassion and expertise made a difficult time more bearable.',
      author: 'Michael Thompson, Son of Patient',
      avatarSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
  },
  {
    icon: HomeIcon,
    title: 'Assisted Living',
    description: 'Discover a supportive environment where personalized care plans and enriching activities promote independence and well-being for our residents.',
    imageSrc: 'https://www.harmonylivingcare.com/wp-content/themes/harmonyhomecarera435/images/slider/3.jpg',
    imageAlt: 'Assisted living community',
    testimonial: {
      quote: 'Moving to assisted living was a big step, but the staff here made the transition smooth and enjoyable. I feel like I\'m part of a caring community.',
      author: 'Eleanor Simmons, Resident',
      avatarSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
  },
  {
    icon: UserGroupIcon,
    title: 'Group Home',
    description: 'Experience the perfect blend of independence and support in our group home setting. Residents enjoy a family-like atmosphere with personalized care, engaging activities, and the comfort of a home-style environment.',
    imageSrc: '/group-home2.jpg',
    imageAlt: 'Group home environment',
    testimonial: {
      quote: 'The group home has been a blessing for our family. Mom receives personalized care while maintaining her sense of independence in a warm, home-like setting.',
      author: 'Sarah Johnson, Daughter of Resident',
      avatarSrc: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
  }
])
</script>