<template>
    <!-- Content section -->
    <div class="mx-auto mt-12 max-w-7xl px-6 sm:mt-22 lg:px-8">
        <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div class="w-full lg:max-w-lg lg:flex-auto">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We’re always looking for awesome people to join us</h2>
            <p class="mt-6 text-xl leading-8 text-gray-600">Our team members play a crucial role in ensuring our residents maintain their independence while receiving the care they need. If you have a heart for serving others and want to make a meaningful difference in the lives of seniors, we'd love to welcome you to our family.</p>
            <img src="/jobs.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]" />
          </div>
          <div class="w-full lg:max-w-xl lg:flex-auto">
            <h3 class="sr-only">Job openings</h3>
            <ul class="-my-8 divide-y divide-gray-100">
              <li v-for="opening in jobOpenings" :key="opening.id" class="py-8">
                <dl class="relative flex flex-wrap gap-x-3">
                  <dt class="sr-only">Role</dt>
                  <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    <a :href="opening.href">
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
              </li>
            </ul>
            <div class="mt-8 flex border-t border-gray-100 pt-8">
              <a href="#" class="text-sm font-semibold leading-6 text-red-500 hover:text-red-400">Apply now! <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>

const jobOpenings = [
  {
    id: 1,
    role: 'Registered Nurse (RN)',
    href: '#',
    description:
      'Provide skilled nursing care and oversee the health needs of our residents. Collaborate with our care team to ensure the highest quality of life for seniors in our assisted living community.',
    salary: '$70,000 - $90,000 USD',
    location: 'Various locations',
  },
  {
    id: 2,
    role: 'Certified Nursing Assistant (CNA)',
    href: '#',
    description:
      'Assist residents with daily living activities, monitor health conditions, and provide compassionate care. Play a crucial role in maintaining the well-being and comfort of our senior residents.',
    salary: '$30,000 - $40,000 USD',
    location: 'Various locations',
  },
  {
    id: 3,
    role: 'Activities Director',
    href: '#',
    description:
      'Plan and implement engaging social, recreational, and educational programs for our residents. Enhance the quality of life for seniors by fostering a vibrant and active community environment.',
    salary: '$45,000 - $60,000 USD',
    location: 'Various locations',
  },
  {
    id: 4,
    role: 'Dietary Manager',
    href: '#',
    description:
      'Oversee meal planning, food preparation, and dietary services for our residents. Ensure nutritious and appealing meals that meet individual dietary needs and preferences.',
    salary: '$50,000 - $70,000 USD',
    location: 'Various locations',
  },
]

</script>