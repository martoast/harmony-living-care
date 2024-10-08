<template>
    <div class="isolate bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div class="px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Invest with Harmony Homecare</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Join us in our mission to provide exceptional care and comfort to seniors. Investing with Harmony Homecare offers you the opportunity to make a positive impact while potentially earning attractive returns.</p>
            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Investment Opportunity</span>
                  <CurrencyDollarIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Stable returns in the growing senior care market</dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Social Impact</span>
                  <HeartIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Make a meaningful difference in seniors' lives</dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Expert Management</span>
                  <UserGroupIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Experienced team with a track record of success</dd>
              </div>
            </dl>
          </div>
        </div>
        <form @submit.prevent="onSubmit" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div class="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="data.form.firstName" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div class="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="data.form.lastName" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="business-name" class="block text-sm font-semibold leading-6 text-gray-900">Business name</label>
                <div class="mt-2.5">
                  <input type="text" name="business-name" id="business-name" v-model="data.form.business_name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" v-model="data.form.email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                <div class="mt-2.5">
                  <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" v-model="data.form.phone" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Additional information or questions</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" v-model="data.form.message" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            <div v-if="data.errors.general" class="mt-4 text-red-600">{{ data.errors.general }}</div>
            <div class="mt-8 flex justify-end">
              <button type="submit" :disabled="data.loading" class="rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                {{ data.loading ? 'Submitting...' : 'Submit' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { CurrencyDollarIcon, HeartIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
  
  const data = reactive({
    form: {
      firstName: '',
      lastName: '',
      business_name: '',
      email: '',
      phone: '',
      message: '',
      terms: false
    },
    loading: false,
    errors: {}
  })
  
  const onSubmit = async () => {
    data.loading = true;
    const payload = {
      lead: {
        name: `${data.form.firstName} ${data.form.lastName}`,
        email: data.form.email,
        phone: data.form.phone,
        message: data.form.message,
        business_name: data.form.business_name
      }
    };
  
    try {
      const response = await $fetch('/api/webhook-invest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload
      });
  
      alert('Submitted!!! We will be in touch.')
      
      // Reset form after successful submission
      Object.keys(data.form).forEach(key => data.form[key] = '');
      data.form.terms = false;
    } catch (error) {
      console.error('Error submitting form', error);
      data.errors = error.response?._data?.errors || { general: 'An error occurred while submitting the form' };
    } finally {
      data.loading = false;
    }
  };
  </script>