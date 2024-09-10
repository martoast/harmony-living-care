<template>
  <Disclosure as="nav" class="bg-white shadow relative z-50" v-slot="{ open }">
    <div ref="rootElement" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="/main-logo.svg" alt="Your Company" />
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <NuxtLink to="/" :class="linkClass('/')">Home</NuxtLink>
            
            <div class="relative inline-flex h-full group" 
                 @mouseenter="showDropdown('about')" 
                 @mouseleave="hideDropdown('about')">
              <button type="button" class="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 group" id="about-menu" aria-expanded="true" aria-haspopup="true">
                About us
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div v-show="dropdowns.about" class="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="about-menu">
                <div class="py-1" role="none">
                  <NuxtLink to="/#about" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">About us</NuxtLink>
                  <NuxtLink to="/hiring-process" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Hiring Process</NuxtLink>
                </div>
              </div>
            </div>

            <div class="relative inline-flex h-full group"
                 @mouseenter="showDropdown('services')"
                 @mouseleave="hideDropdown('services')">
              <button type="button" class="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 group" id="services-menu" aria-expanded="true" aria-haspopup="true">
                Care Services
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div v-show="dropdowns.services" class="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="services-menu">
                <div class="py-1" role="none">
                  <NuxtLink to="/services/assisted-living" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Assisted Living</NuxtLink>
                  <NuxtLink to="/services/independent-living" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Independent Living</NuxtLink>
                  <NuxtLink to="/services/memory-care" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Memory Care</NuxtLink>
                  <NuxtLink to="/services/skilled-nursing" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Skilled Nursing</NuxtLink>
                </div>
              </div>
            </div>

            <div class="relative inline-flex h-full group"
                 @mouseenter="showDropdown('communities')"
                 @mouseleave="hideDropdown('communities')">
              <button type="button" class="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 group" id="communities-menu" aria-expanded="true" aria-haspopup="true">
                Communities
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div v-show="dropdowns.communities" class="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="communities-menu">
                <div class="py-1" role="none">
                  <NuxtLink to="/communities/?address=california" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">California</NuxtLink>
                  <NuxtLink to="/communities/?address=texas" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Texas</NuxtLink>
                </div>
              </div>
            </div>

            <NuxtLink to="/#faq" :class="linkClass('/#faq')">FAQs</NuxtLink>
            <NuxtLink to="/careers" :class="linkClass('/careers')">Careers</NuxtLink>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="tel:+1(956)382-4168" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
              <PhoneIcon class="-ml-0.5 h-5 w-5" aria-hidden="true"></PhoneIcon>
              {{options.text}}
            </a>

          </div>
          <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3" v-if="user">
              <div>
                <MenuButton class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  <span class="sr-only">Open user menu</span>
                  <img v-if="user.photoURL" class="h-8 w-8 rounded-full" :src="user.photoURL" alt="">
                  <UserIcon v-else class="h-7 w-7 text-gray-400 rounded-full" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                   <button @click="signOutUser" class="w-full">
                      <div :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Logout</div>
                   </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton as="a" href="/" class="block border-l-4 border-red-500 bg-red-50 py-2 pl-3 pr-4 text-base font-medium text-red-500 sm:pl-5 sm:pr-6">Home</DisclosureButton>
        <DisclosureButton as="a" href="/#about" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">About us</DisclosureButton>
        <DisclosureButton as="a" href="/#services" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">Care Services</DisclosureButton>
        <DisclosureButton as="a" href="/communities/" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">Communities</DisclosureButton>
        <DisclosureButton as="a" href="/#faq" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">FAQs</DisclosureButton>
        <DisclosureButton as="a" href="/careers" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">Careers</DisclosureButton>
      </div>
      <div v-if="user" class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4 sm:px-6">
          <div class="flex-shrink-0">
            <img v-if="user.photoURL" class="h-8 w-8 rounded-full" :src="user.photoURL" alt="">
            <UserIcon v-else class="h-7 w-7 text-gray-400 rounded-full" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{user.displayName ?? ''}}</div>
            <div class="text-sm font-medium text-gray-500">{{user.email}}</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <DisclosureButton as="button" @click="signOutUser" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6">Sign out</DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/vue/24/outline'
import { PhoneIcon } from '@heroicons/vue/20/solid'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth'

const user = useCurrentUser()
const auth = useFirebaseAuth()
const router = useRouter()
const route = useRoute()

const rootElement = ref(null)
const options = {
    text: '(956) 382-4168', 
}

const dropdowns = reactive({
  about: false,
  services: false,
  communities: false,
})

const dropdownTimers = reactive({})

const showDropdown = (key) => {
  if (dropdownTimers[key]) {
    clearTimeout(dropdownTimers[key])
  }
  dropdowns[key] = true
}

const hideDropdown = (key) => {
  dropdownTimers[key] = setTimeout(() => {
    dropdowns[key] = false
  }, 200) // 300ms delay before closing
}

const linkClass = (path) => {
  return {
    'border-red-500 text-gray-900': isActiveRoute(path),
    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': !isActiveRoute(path),
    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium': true
  }
}

const isActiveRoute = (route) => {
  const currentPath = router.currentRoute.value.path
  if (route === '/' && currentPath === '/') {
    return true
  }
  return currentPath.startsWith(route) && (currentPath === route || currentPath.charAt(route.length) === '/')
}

const signOutUser = async () => {
  try {
    await signOut(auth)
    await navigateTo('/login')
    console.log('Signed out successfully')
  } catch (err) {
    console.error('Sign-out error:', err)
  }
}
</script>