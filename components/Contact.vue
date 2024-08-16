<template>
  <div class="relative bg-white">
    <div class="lg:absolute lg:inset-0 lg:left-1/2">
      <img class="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full" src="/backyard.jpg" alt="" />
    </div>
    <div class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
      <div class="px-6 lg:px-8">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">Let's Discuss Your Assisted Living Needs</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">We're here to help you find the perfect assisted living solution. Whether you're exploring options for yourself or a loved one, our team is ready to answer your questions and guide you through the process.</p>
          <form @submit.prevent="onSubmit" class="mt-16">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div class="mt-2.5">
                  <input v-model="data.form.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div class="mt-2.5">
                  <input v-model="data.form.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input v-model="data.form.email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="text-sm leading-6">
                  <label for="phone" class="block font-semibold text-gray-900">Phone</label>
                </div>
                <div class="mt-2.5">
                  <input v-model="data.form.phone" type="tel" name="phone" required id="phone" autocomplete="tel" aria-describedby="phone-description" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between text-sm leading-6">
                  <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">How can we help you?</label>
                  <p id="message-description" class="text-gray-400">Max 500 characters</p>
                </div>
                <div class="mt-2.5">
                  <textarea v-model="data.form.message" id="message" name="message" rows="4" aria-describedby="message-description" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <input v-model="data.form.terms" id="terms" name="terms" type="checkbox" required class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-medium text-gray-700">
                      I understand that by submitting this information I am agreeing to receive email and phone communication from Harmony Homecare LLC*
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
              <button type="submit" :disabled="data.loading" class="rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                {{ data.loading ? 'Submitting...' : 'Submit' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  loading: false,
  errors: {},
  form: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    terms: false
  }
});

const onSubmit = async () => {
  data.loading = true;
  const payload = {
    lead: {
      name: `${data.form.firstName} ${data.form.lastName}`,
      email: data.form.email,
      phone: data.form.phone,
      message: data.form.message
    }
  };

  try {
    const response = await $fetch('/api/webhook-forwarder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    });
    console.log('Form submitted successfully', response);
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