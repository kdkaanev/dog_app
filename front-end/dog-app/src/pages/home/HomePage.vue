<script setup>
import HeroSection from './components/HeroSection.vue';
import HowItWorks from './components/HowItWorks.vue';
import SuccessStories from './components/SuccessStories.vue';
import CallToAction from './components/CallToAction.vue';

</script>



<template>
   <div class="homepage">
    <HeroSection />
    <HowItWorks />
    <SearchBar />
    <!-- <SuccessStories /> -->
    <Testimonials />
    <CallToAction />
  
  </div>
</template>

<style scoped>
.homepage {
  background: url(../../assets/background.png);
  background-size: cover;
  
}


</style>