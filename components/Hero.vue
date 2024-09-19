<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-indigo-100/20">
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pt-10 lg:pb-30">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-20">
        <div class="relative aspect-[4/3] lg:aspect-auto lg:col-start-2 lg:row-span-2">
          <img src="https://ik.imagekit.io/zcfjs0rmjr/wp-content/uploads/2023/03/Image-2.png" alt="Senior women and Atria employee smiling while potting plants outdoors." class="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-tr from-white via-white to-transparent opacity-20"></div>
        </div>
        <div class="mt-10 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:self-center">
          <div class="lg:max-w-lg">
            <p class="text-sm font-semibold uppercase tracking-wide text-red-500">Senior Living &amp; Memory Care</p>
            <h1 class="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Making Home a Haven of Health and Happiness</h1>
            <p class="mt-4 text-xl text-gray-500">Our mission is simple: provide dignity, comfort, and a sense of belonging to those who need it most.</p>
            <form @submit.prevent="submitForm" class="mt-10 mb-2">
              <label for="city" class="block text-sm font-medium text-gray-700 mb-3">Select a state</label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <select id="state" name="state" v-model="data.form.state" required class="block w-full rounded-md border-gray-300 px-4 py-3 focus:border-red-500 focus:ring-red-500 sm:text-sm [&_*]:text-black">
                  <option value="">Select a state</option>
                  <option value="alabama">Alabama</option>
                  <option value="arizona">Arizona</option>
                  <option value="california">California</option>
                  <option value="texas">Texas</option>
                </select>
                <button type="submit" class="ml-3 inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  Find a Community
                </button>
              </div>
            </form>
            <p class="text-sm text-gray-500">
              Don't see your state?
              <a href="/#inquiry" class="font-semibold leading-6 text-red-500 hover:text-red-400">Submit inquiry</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const data = reactive({
    loading: false,
    errors: {},
    form: {
      state: ''
    }
  });

const submitForm = async () => {
  await navigateTo({
  path: '/communities/',
  query: {
    address: data.form.state,
  }
})
}
</script>