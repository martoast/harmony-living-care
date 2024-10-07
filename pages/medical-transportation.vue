<template>
    <div>

        <div class="relative h-screen">
    <img src="/ambulance-large.jpg" alt="Ambulance" class="absolute inset-0 w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative h-full flex items-center">
      <div class="container mx-auto px-4">
        <div class="w-full md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Professional Medical Transportation</h1>
          <p class="text-xl text-white mb-8">Reliable, compassionate, and safe transport for all your medical needs</p>
          <a href="#request-transport" class="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Request Transport
          </a>
        </div>
      </div>
    </div>
  </div>
        
    <MedicalTransportationServices/>
    <MedicalTrasportationForm id="request-transport"/>
    <MedicalTransportationFAQ/>
    
    </div>
</template>

<script setup>

useSeoMeta({
  title: () => `Medical transportation | Harmony Living Care`,
  ogTitle: () => `Medical transportation | Harmony Living Care`,
  description: () => 'Reliable, compassionate, and safe transport for all your medical needs',
  ogDescription: () => 'Reliable, compassionate, and safe transport for all your medical needs',
  ogImage: () => '/ambulance-service1.png',
  twitterCard: () => "summary_large_image",
  googleSiteVerification: "ByJ5-rnCYL33Ld2dFoqsnAIRz2LmOc58iB52O8eOaPQ",
});

</script>