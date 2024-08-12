<template>
    <div class="max-w-xl mx-auto w-full py-32">
      <div class="flex justify-center items-center h-full">
        <div class="w-full max-w-md">
          <div class="bg-white shadow-md rounded-lg px-4 pb-4">
            <div class="text-center">
              <h2
                class="my-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
              >
                Register account
              </h2>
            </div>
            <form @submit.prevent="onSubmit" class="space-y-6 w-full">
              <div class="form-group">
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Name</label
                >
                <div class="mt-2">
                  <input
                    v-model="data.form.name"
                    id="name"
                    name="name"
                    type="text"
                    required
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    :class="{ 'border-red border-2': hasError('name') }"
                  />
                  <div v-if="data.errors?.name" class="text-red text-sm mt-1">
                    <span
                      v-for="error in data.errors.name"
                      :key="error"
                      v-html="error"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    v-model="data.form.email"
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    :class="{ 'border-red border-2': hasError('email') }"
                  />
                  <div v-if="data.errors?.email" class="text-red text-sm mt-1">
                    <span
                      v-for="error in data.errors.email"
                      :key="error"
                      v-html="error"
                    ></span>
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
                <input
                  v-model="data.form.password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  :class="{ 'border-red border-2': hasError('password') }"
                />
                <div v-if="data.errors?.password" class="text-red text-sm mt-1">
                  <template v-for="error in data.errors.password" :key="error">
                    <li v-html="error"></li>
                  </template>
                </div>
              </div>
              <div class="form-group">
                <label
                  for="password_confirmation"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Confirm Password</label
                >
                <input
                  v-model="data.form.password_confirmation"
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  :class="{
                    'border-red border-2': hasError('password_confirmation'),
                  }"
                />
                <div
                  v-if="data.errors?.password_confirmation"
                  class="text-red text-sm mt-1"
                >
                  <template
                    v-for="error in data.errors.password_confirmation"
                    :key="error"
                  >
                    <li v-html="error"></li>
                  </template>
                </div>
              </div>
              <div class="pt-2">
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm disabled:opacity-50 hover:bg-red-400"
                  :disabled="data.loading || !passwordsMatch"
                >
                  <span v-if="!data.loading"> Register account </span>
  
                  <span v-else> Loading... </span>
                </button>
              </div>
              <p class="mt-4 text-center">
                Already have an account?
                <a
                  href="/login"
                  class="font-semibold text-red-500 hover:text-red-400"
                  >Log In</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig();
  const route = useRoute();
  const redirect = route.query?.redirect;
  const hasError = (field) => {
    return !!data.errors[field];
  };
  const data = reactive({
    loading: false,
    errors: {},
    form: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
    },
  });
  
  watch(
    data.form,
    (newForm) => {
      data.errors = {};
    },
    { deep: true }
  );
  
  const passwordsMatch = computed(() => {
    return data.form.password === data.form.password_confirmation;
  });
  
  const onSubmit = async () => {
    console.log("submit")
  };
  </script>
  