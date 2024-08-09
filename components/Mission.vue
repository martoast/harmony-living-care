<template>
    <!-- Content section -->
    <!-- <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-xl leading-8 text-gray-600">At our assisted living community, we are dedicated to enhancing the lives of seniors by providing compassionate care, fostering independence, and creating a warm, vibrant environment where residents can thrive.</p>
              <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>We believe that every senior deserves to live with dignity, comfort, and purpose. Our team of experienced caregivers is committed to delivering personalized support that meets each resident's unique needs and preferences. From assistance with daily activities to engaging social programs, we strive to create a nurturing atmosphere that feels like home.</p>
                <p class="mt-10">Our community is designed to promote active living and social connections. We offer a wide range of amenities and activities that cater to diverse interests and abilities, encouraging our residents to stay engaged, learn new skills, and form lasting friendships. By focusing on holistic well-being - physical, emotional, and social - we aim to help our residents lead fulfilling lives in their golden years.</p>
              </div>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-8 xl:w-80">
                <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">{{ stat.label }}</dt>
                  <dd class="text-5xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Image section -->
      <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img src="https://www.harmonylivingcare.com/wp-content/themes/harmonyhomecarera435/images/slider/nh-banner.jpg" alt="Seniors enjoying activities in assisted living community" class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
      </div>
</template>

<script setup>
const stats = [
  { label: 'Years of experience', value: '25+' },
  { label: 'Satisfied residents', value: '500+' },
  { label: 'Daily activities offered', value: '15+' },
]
</script>