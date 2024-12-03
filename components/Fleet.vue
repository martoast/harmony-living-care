<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Fleet</h2>
        
        <div class="grid grid-cols-1 gap-8">
          <div 
            v-for="(vehicle, index) in fleetData" 
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div class="grid md:grid-cols-3 gap-4">
              <div class="p-6">
                <img 
                  :src="vehicle.image" 
                  :alt="vehicle.title"
                  class="w-full h-52 object-cover rounded-lg"
                />
              </div>
              
              <div class="p-6 md:col-span-2">
                <h3 class="text-xl font-bold mb-4">{{ vehicle.title }}</h3>
                <p class="text-gray-600 mb-4">{{ vehicle.description }}</p>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div 
                    v-for="feature in features" 
                    :key="feature.key"
                    class="flex items-center space-x-2"
                  >
                    <svg 
                      v-if="vehicle.features[feature.key]" 
                      class="w-5 h-5 text-green-500 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <svg 
                      v-else 
                      class="w-5 h-5 text-gray-300 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span class="text-sm">{{ feature.label }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const fleetData = ref([
    {
      title: "MICU (Mobile Intensive Care Unit)",
      image: "/ambulance3.jpg",
      description: "Our MICU team is highly trained in advanced airway management, respiratory care, cardiac care, emergency trauma, stroke care, and other life-threatening medical conditions. All MICU vehicles equipped with advanced features and necessary medical supplies.",
      features: {
        hydraulicStretcher: true,
        oxygen: true,
        generalMedications: true,
        intraosseousAccess: true,
        cardiacMonitoring: true,
        multiLineInfusion: true,
        mobileVentilator: true,
        narcotics: true
      }
    },
    {
      title: "ALS (Advanced Life Support)",
      image: "/ambulance2.jpg",
      description: "Patient is transported by at least 2 ShurMed state-trained staff who are authorized to operate all lifesaving and life-sustaining equipment on board the vehicle. EMT-Intermediate or EMT-Paramedic with enhanced skills present to administer additional interventions and medications if necessary",
      features: {
        hydraulicStretcher: true,
        oxygen: true,
        generalMedications: true,
        intraosseousAccess: true,
        cardiacMonitoring: true,
        multiLineInfusion: false,
        mobileVentilator: false,
        narcotics: false
      }
    },
    {
      title: "BLS (Basic Life Support)",
      image: "/ambulance1.jpg",
      description: "Patient is transported by at least 2 ShurMed state-trained staff who are authorized to operate all lifesaving and life-sustaining equipment on board the vehicle. EMT present to perform essential advanced techniques and to administer medications if necessary.",
      features: {
        hydraulicStretcher: true,
        oxygen: true,
        generalMedications: true,
        intraosseousAccess: false,
        cardiacMonitoring: false,
        multiLineInfusion: false,
        mobileVentilator: false,
        narcotics: false
      }
    },
    {
      title: "Paramedic Interceptor",
      image: "/interceptor.jpeg",
      description: "Our Paramedic Interceptor vehicles are equipped with the same advanced life-saving equipment as our MICU units, allowing our skilled paramedics to quickly respond and provide critical care in emergency situations where rapid intervention is essential.",
      features: {
        hydraulicStretcher: true,
        oxygen: true,
        generalMedications: true,
        intraosseousAccess: true,
        cardiacMonitoring: true,
        multiLineInfusion: true,
        mobileVentilator: true,
        narcotics: true
      }
    },
  ])
  
  const features = ref([
    { key: 'hydraulicStretcher', label: 'Hydraulic Stretcher' },
    { key: 'oxygen', label: 'Oxygen' },
    { key: 'generalMedications', label: 'General Medications' },
    { key: 'intraosseousAccess', label: 'Intraosseous Access (EZ IO)' },
    { key: 'cardiacMonitoring', label: 'Cardiac Monitoring System' },
    { key: 'multiLineInfusion', label: 'Multi-Line Infusion Pump' },
    { key: 'mobileVentilator', label: 'Mobile Ventilator' },
    { key: 'narcotics', label: 'Administration of Narcotics' }
  ])
  </script>