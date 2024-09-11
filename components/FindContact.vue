<template>
  <div id="inquiry" class="bg-white">
    <div class="mx-auto max-w-7xl py-12 sm:px-6 sm:py-24 lg:px-8">
      <div class="relative isolate overflow-hidden bg-indigo-950 px-6 pb-6 shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 class="text-lg font-bold tracking-tight text-white sm:text-xl my-3">Request More Information</h2>
        
        <div class="mt-3 text-left">
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
              <div class="sm:col-span-3">
                <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
                <input v-model="form.name" required type="text" name="name" id="name" autocomplete="name" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm" />
              </div>

              <div class="sm:col-span-3">
                <label for="phone" class="block text-sm font-medium text-gray-300">Phone Number</label>
                <input v-model="form.phone" required id="phone" name="phone" type="tel" autocomplete="tel" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm" />
              </div>

              <div class="sm:col-span-3">
                <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                <input v-model="form.email" required id="email" name="email" type="email" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm" />
              </div>

              <div class="sm:col-span-3">
                <label for="city" class="block text-sm font-medium text-gray-300">City</label>
                <input v-model="form.city" required type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm" />
              </div>

              <div class="sm:col-span-3">
                <label for="state" class="block text-sm font-medium text-gray-300">State</label>
                <select v-model="form.state" required id="state" name="state" autocomplete="address-level1" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm">
                  <option value="">Select a state</option>
                  <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                </select>
              </div>

              <div class="sm:col-span-3">
                <label for="zipCode" class="block text-sm font-medium text-gray-300">Zip Code</label>
                <input v-model="form.zipCode" required type="text" name="zipCode" id="zipCode" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm" />
              </div>

              <div class="sm:col-span-3">
                <label class="block text-sm font-medium text-gray-300 mb-2">Services Needed</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div v-for="service in services" :key="service.value" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :id="service.value" 
                      :value="service.value" 
                      v-model="form.services" 
                      class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <label :for="service.value" class="ml-3 text-sm font-medium text-gray-300">{{ service.label }}</label>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="timeframe" class="block text-sm font-medium text-gray-300">Timeframe</label>
                <input v-model="form.timeframe" required type="text" name="timeframe" id="timeframe" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm" />
              </div>

              <div class="sm:col-span-3">
                <label for="budget" class="block text-sm font-medium text-gray-300">Budget</label>
                <select v-model="form.budget" required id="budget" name="budget" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm">
                  <option value="">Select a budget range</option>
                  <option value="under-3000">Under $3,000 per month</option>
                  <option value="3000-4000">$3,000 - $4,000 per month</option>
                  <option value="4000-5000">$4,000 - $5,000 per month</option>
                  <option value="5000-6000">$5,000 - $6,000 per month</option>
                  <option value="over-6000">Over $6,000 per month</option>
                </select>
              </div>

              <div class="sm:col-span-9">
                <label for="notes" class="block text-sm font-medium text-gray-300">Notes</label>
                <textarea v-model="form.notes" id="notes" name="notes" rows="2" class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"></textarea>
              </div>
            </div>

            <div class="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-around gap-y-6 sm:gap-x-6">
              <div class="text-center sm:text-left">
                <p class="text-gray-100 pb-3 italic">
                  Not all living options are available at all communities.
                </p>
                <p class="text-gray-100 italic">
                  Note: If you are looking for employment at this community. Please visit our <a href="/careers" class="underline">career site</a>
                </p>
              </div>
              <div class="mt-6 sm:mt-0">
                <button type="submit" class="rounded-md bg-red-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const services = ref([
  { value: 'assisted-living', label: 'Assisted Living' },
  { value: 'independent-living', label: 'Independent Living' },
  { value: 'memory-care', label: 'Memory Care' },
  { value: 'skilled-nursing', label: 'Skilled Nursing' }
])

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

const form = reactive({
  name: '',
  phone: '',
  email: '',
  city: '',
  state: '',
  zipCode: '',
  services: [],
  timeframe: '',
  budget: '',
  notes: ''
})

const submitForm = async () => {
  const payload = {
    lead: { ...form }
  };

  try {
    await $fetch('/api/webhook-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    });

    alert('Submitted!!! We will be in touch.')

    // Reset form after successful submission
    Object.keys(form).forEach(key => form[key] = '');
  } catch (error) {
    console.error('Error submitting form', error);
    data.errors = error.response?._data?.errors || { general: 'An error occurred while submitting the form' };
  } finally {
    data.loading = false;
  }
};
</script>