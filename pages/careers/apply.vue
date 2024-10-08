<template>
  <div class="bg-white px-6 py-24 sm:py-32 lg:px-8" v-if="job">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Apply for {{ job.role }}
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">{{ job.description }}</p>

      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=https://harmonylivingcare.com/careers/apply?id=${job.id}/`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          type="button"
          class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            class="h-5 w-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
              clip-rule="evenodd"
            />
          </svg>
          Share on Facebook
        </div>
      </a>
    </div>
    <form
      @submit.prevent="submitApplication"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              v-model="form.firstName"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              v-model="form.lastName"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Phone number</label
          >
          <div class="relative mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              v-model="form.phone"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="resume"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Resume (PDF)</label
          >
          <div class="mt-2.5">
            <input
              type="file"
              name="resume"
              id="resume"
              accept=".pdf"
              @change="handleFileUpload"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 hover:cursor-pointer"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="cover-letter"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Cover Letter</label
          >
          <div class="mt-2.5">
            <textarea
              name="cover-letter"
              id="cover-letter"
              rows="4"
              v-model="form.coverLetter"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            ></textarea>
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <input
              type="checkbox"
              id="privacy-policy"
              v-model="form.agreeToPolicy"
              class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
              required
            />
          </div>
          <label for="privacy-policy" class="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our
            <a href="/privacy-policy" class="font-semibold text-red-500"
              >privacy&nbsp;policy</a
            >.
          </label>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          :disabled="loading"
          class="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          {{ loading ? "Submitting..." : "Submit Application" }}
        </button>
      </div>
      <div class="mt-4 text-sm text-gray-500">
        We are committed to protecting your privacy and handling your
        information in accordance with HIPAA. Your data is encrypted and HIPAA
        compliant. For more information, please read our
        <a href="/hipaa" class="text-red-500 hover:text-red-400 underline"
          >HIPAA Policy</a
        >.
      </div>
    </form>
    <div v-if="error" class="mt-4 text-red-600">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { doc } from "firebase/firestore";
import { useDocument } from "vuefire";

const { $modelsRef } = useNuxtApp();

const route = useRoute();

const jobId = route.query.id;

const { data: job } = useDocument(doc($modelsRef, jobId));

useSeoMeta({
  title: () => `${job.value?.role} Application | Harmony Living Care`,
  ogTitle: () => `${job.value?.role} | Harmony Living Care`,
  description: () => job.value?.description,
  ogDescription: () => job.value?.description,
  ogImage: () => job.value?.image,
  twitterCard: () => "summary_large_image",
  googleSiteVerification: "ByJ5-rnCYL33Ld2dFoqsnAIRz2LmOc58iB52O8eOaPQ",
});

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  resume: null,
  coverLetter: "",
  agreeToPolicy: false,
});

const loading = ref(false);
const error = ref(null);

const handleFileUpload = (event) => {
  form.resume = event.target.files[0];
};

const submitApplication = async () => {
  loading.value = true;
  error.value = null;

  const formData = new FormData();

  // Append form fields
  Object.entries(form).forEach(([key, value]) => {
    if (key !== "resume" && value !== null && value !== undefined) {
      formData.append(key, value.toString());
    }
  });

  // Append file
  if (form.resume instanceof File) {
    formData.append("resume", form.resume, form.resume.name);
  }

  // Append job details
  if (job.value) {
    Object.entries(job.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value.toString());
      }
    });
  }

  try {
    const response = await $fetch("/api/application-webhook", {
      method: "POST",
      body: formData,
    });

    console.log("Response:", response);
    alert("Submitted!!! We will be in touch.");

    // Reset form after successful submission
    Object.keys(form).forEach((key) => (form[key] = ""));
    form.agreeToPolicy = false;
  } catch (err) {
    console.error("Error submitting form", err);
    error.value =
      err instanceof Error
        ? err.message
        : "An error occurred while submitting the form";
  } finally {
    loading.value = false;
  }
};
</script>
