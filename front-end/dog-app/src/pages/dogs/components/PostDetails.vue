<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useUserStore } from "../../../stores/useUserStore";

const route = useRoute();
const post = ref(null);
const props = defineProps({
    posts: Object,
    user: Object,
});
const userStore = useUserStore();

onMounted(async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/dogs/${route.params.id}`);
    post.value = response.data;
  } catch (error) {
    console.error("Error fetching post details:", error);
  }
});
</script>




<template>
    <article class="cart">

      <div v-if="post">
        <h1 v-if="post.title">{{ post.title }}</h1>
    <img :src="post.photo_url" alt="Dog Image" />
    <h2>{{ post.status }}</h2>
    <p>{{ post.description }}</p>
    <p><strong>Breed:</strong> {{ post.breed }}</p>
    <p><strong>Last Seen:</strong> {{ post.last_seen_location }}</p>
    <p><strong>date:</strong> {{ post.date_posted}}</p>

    <button type="button"  v-if="userStore.user">Edit</button>
    <button type="button" v-else>Contact</button>



  </div>
  <p v-else>Loading...</p>
    </article>
  </template>
  
 <style scoped>

.cart{
    
    width: 360px;
   
    text-align: center;
    background-color:transparent;
   
}
</style>
 