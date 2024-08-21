<template>
  <!-- Content section -->
  <div class="mx-auto my-24 max-w-7xl px-6 sm:mt-22 lg:px-8">
    <div class="mx-auto flex max-w-2xl flex-col items-start justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
      <div class="w-full lg:max-w-lg lg:flex-auto">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We're always looking for awesome people to join us</h2>
        <p class="mt-6 text-xl leading-8 text-gray-600">Our team members play a crucial role in ensuring our residents maintain their independence while receiving the care they need. If you have a heart for serving others and want to make a meaningful difference in the lives of seniors, we'd love to welcome you to our family.</p>
        <img src="/jobs.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]" />
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="sr-only">Job openings</h3>
        <ul class="-my-8 divide-y divide-gray-100">
          <li v-for="opening in jobs" :key="opening.id" class="py-8">
            <div class="relative rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
              <dl class="flex flex-wrap gap-x-3">
                <dt class="sr-only">Role</dt>
                <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                  <a :href="'/careers/apply?id=' + opening.id">
                    {{ opening.role }}
                    <span class="absolute inset-0" aria-hidden="true" />
                  </a>
                </dd>
                <dt class="sr-only">Description</dt>
                <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">{{ opening.description }}</dd>
                <dt class="sr-only">Salary</dt>
                <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">{{ opening.salary }}</dd>
                <dt class="sr-only">Location</dt>
                <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                  <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  {{ opening.location }}
                </dd>
              </dl>
              <div class="mt-4 flex justify-end">
                <p class="text-sm font-semibold leading-6 text-red-500 hover:text-red-400">
                  Apply now! <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

// const { $modelsRef } = useNuxtApp();

// const { data: jobs } = useCollection($modelsRef)

const jobs = [
  {
    id: 1,
    role: 'Certified Nursing Assistant (CNA) Med Surg',
    href: '#',
    description: 'Assist patients in med-surg units with daily living activities, monitor vital signs, and provide basic nursing care. Work closely with nurses to ensure quality patient care and comfort during hospital stays.',
    salary: '$35,000 - $45,000 USD',
    location: 'San Diego, California',
  },
  {
    id: 2,
    role: 'Nurse (Clinical/Ambulatory)',
    href: '#',
    description: 'Provide skilled nursing care in clinical or ambulatory settings. Assess patients, administer treatments, and collaborate with healthcare teams to deliver comprehensive patient care. May involve working in outpatient clinics or specialized medical units.',
    salary: '$75,000 - $95,000 USD',
    location: 'San Diego, California',
  },
  {
    id: 3,
    role: 'Concierge',
    href: '#',
    description: 'Serve as the first point of contact for guests and residents. Provide exceptional customer service, assist with inquiries, manage reservations, and coordinate various guest services to ensure a pleasant and comfortable experience.',
    salary: '$30,000 - $40,000 USD',
    location: 'Dallas, Texas',
  },
  {
    id: 4,
    role: 'Full Time Concierge',
    href: '#',
    description: 'Manage all aspects of guest relations and services on a full-time basis. Handle complex guest requests, oversee lobby operations, coordinate with different departments, and maintain high standards of service excellence throughout all shifts.',
    salary: '$35,000 - $45,000 USD',
    location: 'San Antonio, Texas',
  }
]

</script>