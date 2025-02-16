
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigateTo = (path) => router.push(path);
</script>



<template>
    <section class="call-to-action">
      <h2>Join PawPal Today!</h2>
      <button @click="navigateTo('/register')">Sign Up</button>
    </section>
  </template>
  

  
  <style scoped>
  .call-to-action {
    text-align: center;
    padding: 2rem;
  }
  button {
    background: #ff6600;
    color: white;
    padding: 1rem 2rem;
    border: none;
  }
  </style>
  