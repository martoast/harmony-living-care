<template>
    <div class="px-6 py-12 sm:py-24 lg:px-0">
        <div class="max-w-2xl lg:mx-auto my-12">
        <form @submit.prevent="submitForm">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Please provide information about the person applying for assisted living.</p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
              <div class="mt-2">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <div class="mt-2">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" v-model="form.email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="date-of-birth" class="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
              <div class="mt-2">
                <input type="date" name="date-of-birth" id="date-of-birth" v-model="form.dateOfBirth" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
              <div class="mt-2">
                <input type="tel" name="phone" id="phone" autocomplete="tel" v-model="form.phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
  
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Services Required</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Select the services you're interested in.</p>
  
          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">Services</legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="assisted-living" name="assisted-living" type="checkbox" v-model="form.services.assistedLiving" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="assisted-living" class="font-medium text-gray-900">Assisted Living</label>
                    <p class="text-gray-500">Support with daily activities and care.</p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="independent-living" name="independent-living" type="checkbox" v-model="form.services.independentLiving" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="independent-living" class="font-medium text-gray-900">Independent Living</label>
                    <p class="text-gray-500">For those who can live independently but want community and amenities.</p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="memory-care" name="memory-care" type="checkbox" v-model="form.services.memoryCare" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="memory-care" class="font-medium text-gray-900">Memory Care</label>
                    <p class="text-gray-500">Specialized care for those with memory-related conditions.</p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="skilled-nursing" name="skilled-nursing" type="checkbox" v-model="form.services.skilledNursing" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="skilled-nursing" class="font-medium text-gray-900">Skilled Nursing</label>
                    <p class="text-gray-500">For those requiring 24/7 medical care and supervision.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
  
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Health Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Please provide relevant health information to help us better understand your needs.</p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label for="medical-conditions" class="block text-sm font-medium leading-6 text-gray-900">Current Medical Conditions</label>
              <div class="mt-2">
                <textarea id="medical-conditions" name="medical-conditions" rows="3" v-model="form.medicalConditions" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Briefly describe any current medical conditions or concerns.</p>
            </div>
  
            <div class="col-span-full">
              <label for="medications" class="block text-sm font-medium leading-6 text-gray-900">Current Medications</label>
              <div class="mt-2">
                <textarea id="medications" name="medications" rows="3" v-model="form.medications" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">List any current medications and dosages.</p>
            </div>
          </div>
        </div>
  
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Emergency Contact</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Please provide information for an emergency contact.</p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="emergency-name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <div class="mt-2">
                <input type="text" name="emergency-name" id="emergency-name" v-model="form.emergencyContact.name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="emergency-relationship" class="block text-sm font-medium leading-6 text-gray-900">Relationship</label>
              <div class="mt-2">
                <input type="text" name="emergency-relationship" id="emergency-relationship" v-model="form.emergencyContact.relationship" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="emergency-phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
              <div class="mt-2">
                <input type="tel" name="emergency-phone" id="emergency-phone" v-model="form.emergencyContact.phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <a :href="'/communities/' + route.params.id "><button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button></a>
        <button :disabled="loading" type="submit" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Submit Application</button>
      </div>
    </form>
        </div>

    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const route = useRoute()

  const loading = ref(false)
  
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    services: {
      assistedLiving: false,
      independentLiving: false,
      memoryCare: false,
      skilledNursing: false
    },
    medicalConditions: '',
    medications: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    }
  })
  
  const submitForm = async () => {
    loading.value = true;

  const payload = {
    lead: { ...form.value }
  };

  try {
    await $fetch('/api/patient-application-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    });

    

    // Reset form after successful submission
    Object.keys(form.value).forEach(key => form.value[key] = '');
  } catch (error) {
    console.error('Error submitting form', error);
    alert(error)
  } finally {
    loading.value = false;
    alert('Submitted!!! We will be in touch.')
  }
};
  </script>