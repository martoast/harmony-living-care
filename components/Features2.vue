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
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-6 w-6 rounded-full" :src="service.testimonial.avatarSrc" alt="" />
                  </div>
                  <div class="text-base font-medium text-gray-700">{{ service.testimonial.author }}</div>
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
import { PlusIcon, HomeIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

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
      quote: 'The hospice team provided incredible support during my father\'s final days. Their compassion and expertise made a difficult time more bearable.',
      author: 'Michael Thompson, Son of Patient',
      avatarSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
  },
  {
    icon: HomeIcon,
    title: 'Assisted Living',
    description: 'Discover a supportive environment where personalized care plans and enriching activities promote independence and well-being for our residents.',
    imageSrc: '/tea.jpeg',
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
]
</script>