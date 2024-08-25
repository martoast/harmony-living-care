<template>
  <div>
    <Navbar/>
    <slot />
    <Footer/>
  </div>
</template>

<script setup>

useServerSeoMeta({
        robots: 'index, follow',
        title: 'Harmony Homecare',
        ogTitle: 'Harmony Homecare',
    
        author: 'Alex Martos',
        charset: 'utf-8',
    
        description: "Making Home a Haven of Health and Happiness",
        ogDescription: "Making Home a Haven of Health and Happiness",
    
        googleSiteVerification: '',
    
        appleMobileWebAppCapable: 'yes',
        mobileWebAppCapable: 'yes',
    
        ogImage: '/public/logo.jpg',
    
        ogLocaleAlternate: ['es_LA'],
        ogType: 'website',
        viewport: 'width=device-width, initial-scale=1',
    })

</script>