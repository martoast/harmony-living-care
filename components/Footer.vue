<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Services</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-10 xl:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form @submit.prevent="onSubmit" class="mt-6 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="data.form.email" type="email" name="email-address" id="email-address" autocomplete="email" required="" class="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="Enter your email" />
            <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button type="submit" class="flex w-full items-center justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Subscribe</button>
            </div>
          </form>
          <div class="mt-6 flex space-x-6">
            <img class="h-8" src="/access-icon.svg" alt="access-icon" />
            <img class="h-8" src="/equal-housing-icon.svg" alt="equal-housing-icon" />
            <img class="h-8" src="/harmony-health-logo.svg" alt="harmony-health-logo-icon" />

          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">&copy; 2024 Harmony HomeCare LLC, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
    { name: 'Assisted Living', href: '/services/assisted-living' },
    { name: 'Independent Living', href: '/services/independent-living' },
    { name: 'Memory Care', href: '/services/memory-care' },
    { name: 'Skilled Nursing', href: '/services/skilled-nursing' },
    { name: 'Medical Transportation', href: '/medical-transportation' },
    
  ],
  support: [
    { name: 'Contact', href: '/#contact' },
    { name: 'Schedule a call', href: '/#cta' },
    { name: 'Hiring Process', href: '/hiring-process' },
    { name: 'Life at Harmony', href: '/life-at-harmony' },
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Care Services', href: '/#services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Invest with us', href: '/invest' },
  ],
  legal: [
    { name: 'HIPAA', href: '/hipaa' },
    { name: 'Privacy policy', href: '/privacy-policy' },
    { name: 'Terms of service', href: '/terms-of-service' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/HarmonyLivingCare?mibextid=LQQJ4d',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    
    
  ],
};

const data = reactive({
  loading: false,
  errors: {},
  form: {
    email: '',
  }
});

const onSubmit = async () => {
  data.loading = true;
  const payload = {
    lead: {
      email: data.form.email,
    }
  };

  try {
    await $fetch('/api/webhook-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    });

    alert('Submitted!!! You are now in the newsletter.')

    data.form.email = '';
  } catch (error) {
    console.error('Error submitting form', error);
    data.errors = error.response?._data?.errors || { general: 'An error occurred while submitting the form' };
  } finally {
    data.loading = false;
  }
};
</script>