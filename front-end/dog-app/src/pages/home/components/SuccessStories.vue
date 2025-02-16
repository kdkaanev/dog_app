<script setup>
import { ref } from "vue";
const stories = ref([
  { id: 1, image: "/assets/happy1.jpg", text: "Luna found her way home!" },
  { id: 2, image: "/assets/happy2.jpg", text: "Max was reunited after 3 days!" },
]);
</script>


<template>
    <section class="success-stories">
      <h2>Success Stories</h2>
      <div class="stories">
        <div v-for="story in stories" :key="story.id" class="story">
          <img :src="story.image" alt="Happy pet" />
          <p>{{ story.text }}</p>
        </div>
      </div>
    </section>
  </template>
  

  <style scoped>
  .success-stories {
    text-align: center;
    padding: 2rem;
  }
  .stories {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
  }
  .story img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  </style>
  