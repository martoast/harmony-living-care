<template>
  <div class="relative overflow-hidden bg-white py-24 sm:py-32">
    <div ref="rootElement" class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Compassionate Care Tailored to You</h2>
      <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
        From personalized care plans to specialized memory care, our compassionate team is dedicated to providing exceptional support in a warm and nurturing environment designed for comfort and well-being.
      </p>
    </div>
    <div v-for="(service, index) in services" :key="index" :class="{ 'relative mt-12 lg:mt-24': index !== 1, 'mt-24': index === 1 }">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div :class="{
          'mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16': index !== 1,
          'mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32': index === 1
        }">
          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                <component :is="service.icon" class="h-8 w-8 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">{{ service.title }}</h2>
              <p class="mt-4 text-lg text-gray-500">{{ service.description }}</p>
              <div class="mt-6">
                <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                  <CalendlyPopupButton
                      v-bind="options"
                      :root-element="rootElement"
                  />
                 
                </button>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">&ldquo;{{ service.testimonial.quote }}&rdquo;</p>
              </div>
              <!-- Add 5-star reviews here -->
              <div class="mt-2 flex items-center">
           
                  <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 text-red-500" aria-hidden="true" />
         
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-6 w-6 rounded-full" :src="service.testimonial.avatarSrc" alt="" />
                  </div>
                  <div class="text-base font-medium text-gray-700">{{ service.testimonial.author }}</div>
                </div>
                <div class="mt-2">
                  <a 
                    href="https://www.google.com/search?client=safari&sca_esv=d4927bc780c8916e&hl=en-us&cs=0&output=search&q=Harmony+Home+Care&ludocid=5161754072448489233&lsig=AB86z5UIgwi-nk6tg8Tc-tTb2Bxz&shndl=-1&shem=lrnolc,lsde,vslcea&source=sh/x/loc/act/m4/3#lrd=0x865cf7e4d2d26f3f:0x47a23bfb1237d711,1,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-red-500 hover:text-red-600 transition-colors duration-300"
                  >
                    Leave us a review on Google
                  </a>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div :class="{
          'mt-12 sm:mt-16 lg:mt-0': index !== 1,
          'mt-12 sm:mt-16 lg:col-start-1 lg:mt-0': index === 1
        }">
          <div :class="{
            '-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0': index !== 1,
            '-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0': index === 1
          }">
            <img 
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none" 
              :class="{ 'lg:left-0': index !== 1, 'lg:right-0': index === 1 }"
              :src="service.imageSrc" 
              :alt="service.imageAlt" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon, HomeIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'

const rootElement = ref(null)
const options = {
    url: 'https://calendly.com/e_steban/harmony-discovery-call?primary_color=ef4444', 
    text: 'Schedule a call', 
}

const services = [
  {
    icon: PlusIcon,
    title: 'Skilled Nursing',
    description: "Our expert nurses provide comprehensive, high-quality care tailored to each resident's unique needs. With advanced training and years of experience, our nursing team ensures the highest standards of health management and personalized attention for your loved ones.",
    imageSrc: '/feature1.jpg',
    imageAlt: 'Hospice care environment',
    testimonial: {
      quote: 'My grandpa loves his nurse',
      author: 'Jon Motsenbocker',
      avatarSrc: 'https://lh3.googleusercontent.com/a-/ALV-UjWMPWu4OZwbHiOCQ6xfgBdV-kdvXXRldaWJVDTUHc7m1lGAl577=w120-h120-p-rp-mo-br100'
    }
  },
  {
    icon: HomeIcon,
    title: 'Assisted Living',
    description: 'Discover a supportive environment where personalized care plans and enriching activities promote independence and well-being for our residents.',
    imageSrc: '/tea.jpeg',
    imageAlt: 'Assisted living community',
    testimonial: {
      quote: "I couldn't be more impressed with the assisted living care and support provided by Harmony Home Care. Their team is incredibly compassionate, attentive, and professional. They went above and beyond to ensure my grandmother received the best possible care, making this difficult time much easier for our family...",
      author: 'Will Smith',
      avatarSrc: 'https://lh3.googleusercontent.com/a-/ALV-UjXplbzhOcqwPNo8S9T_tVoxKJcRht_1ab-6n5sqAPp5UwuNr5Yu=w120-h120-p-rp-mo-br100'
    }
  },
  {
    icon: UserGroupIcon,
    title: 'Group Home',
    description: 'Experience the perfect blend of independence and support in our group home setting. Residents enjoy a family-like atmosphere with personalized care, engaging activities, and the comfort of a home-style environment.',
    imageSrc: '/group-home2.jpg',
    imageAlt: 'Group home environment',
    testimonial: {
      quote: 'Esteban and his team did an amazing job navigating and helping me select the best option for home care! His attention to detail in his explanation and hospitality he gave me as he helped me was beyond amazing!',
      author: 'Alex Arroyo',
      avatarSrc: 'https://lh3.googleusercontent.com/a/ACg8ocIbYvJml8zR1jznhI0g2bX_CpfOaVQq7LUx5IKnnSaZEqYiaA=w120-h120-p-rp-mo-br100'
    }
  }
]
</script>
