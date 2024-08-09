<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
  {
    question: "What level of care does your assisted living facility provide?",
    answer: "Our facility offers a range of care levels to meet diverse needs. We provide assistance with daily living activities such as bathing, dressing, and medication management. We also offer memory care for residents with Alzheimer's or dementia. Our staff is available 24/7 to ensure the safety and well-being of all residents.",
  },
  {
    question: "How do you determine the care plan for each resident?",
    answer: "We conduct a comprehensive assessment for each new resident, involving our nursing staff, the resident, and their family. This helps us understand the individual's needs, preferences, and health status. Based on this assessment, we create a personalized care plan that is regularly reviewed and adjusted as needs change.",
  },
  {
    question: "What amenities and activities do you offer?",
    answer: "We provide a variety of amenities including restaurant-style dining, a fitness center, library, and beautiful outdoor spaces. Our activities program offers diverse options such as art classes, music therapy, gardening, book clubs, and local outings. We tailor activities to match residents' interests and abilities, promoting social engagement and cognitive stimulation.",
  },
  {
    question: "How do you handle medical emergencies?",
    answer: "We have trained staff on-site 24/7 to respond to any medical emergencies. All our staff members are certified in CPR and first aid. We have established protocols for emergency situations and maintain close relationships with local hospitals and emergency services for quick response when needed.",
  },
  {
    question: "What is your visitation policy?",
    answer: "We encourage family involvement and have an open visitation policy. Family and friends can visit at any time, though we recommend considering residents' routines and meal times. We also offer guest meals and private spaces for family gatherings to help maintain strong connections with loved ones.",
  },
  {
    question: "How do you ensure the safety and security of residents?",
    answer: "Safety is our top priority. We have 24/7 security personnel, emergency response systems in all living spaces, and secure entry systems. Our facility is equipped with fire safety systems, and we conduct regular safety drills. We also have protocols in place to prevent falls and other common risks associated with senior living.",
  },
  {
    question: "What are your meal options and dietary accommodations?",
    answer: "Our dining program offers restaurant-style service with menu choices at each meal. We cater to various dietary needs including low-sodium, diabetic-friendly, and texture-modified diets. Our registered dietitian works closely with our culinary team to ensure meals are both nutritious and delicious, accommodating individual preferences and restrictions.",
  },
  {
    question: "How do you support residents in maintaining their independence?",
    answer: "We strive to promote independence while providing necessary support. Our care plans are designed to assist only where needed, encouraging residents to do as much for themselves as safely possible. We offer adaptive equipment and teach strategies to maximize independence in daily activities. Our goal is to help residents maintain their dignity and sense of autonomy.",
  },
]
  </script>