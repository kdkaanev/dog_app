<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from 'vue';
import { useUserStore } from '../../../stores/useUserStore';
const router = useRouter();
const navigateTo = (path) => router.push(path);

const userStore = useUserStore();
onMounted(() => {
  userStore.reAuthUser();
});

</script>
<template>
    <section class="hero">
      <img class="happy" src="../../../assets/happy-pet.webp" alt="">
      <div>
        <h1>Helping Lost Pets Find Their Way Home</h1>
      <p>Join our community to help reunite lost pets with their owners.</p>
      <button v-if="userStore.user" @click="navigateTo('/add-post')">Report a Lost Pet</button>
      <button v-else @click="navigateTo('/login')">Report a Lost Pet</button>
      <button @click="navigateTo('/show-posts')">Browse Listings</button>
    </div>
    </section>
  </template>
  

  
  <style scoped>
  @media (max-width: 600px) {
    .hero {
      flex-direction: column;
      align-items: center;
    }
    .happy {
      width: 200px;
      height: 200px;
    }
  }
  .hero {
    display: flex;
    text-align: center;
    padding: 4rem;
    background: url('/assets/pawpal-hero.jpg') no-repeat center center;
    background-size: cover;
    color: white;
  }
  button {
    margin: 1rem;
    padding: 1rem 2rem;
    background: #ff6600;
    color: white;
    border: none;
    cursor: pointer;
  }
  .happy {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    
  }
  p{
    font-family: "Playwrite AU SA", serif;
  }
  </style>
  