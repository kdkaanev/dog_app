<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "../../../stores/useUserStore";
import { deletePost} from "../../../servvices/postServises";

const route = useRoute();
const router = useRouter();
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
    await userStore.reAuthUser();
    
  } catch (error) {
    console.error("Error fetching post details:", error);
  }
  
});
const isOwner = computed(() => {
  return userStore.user?.id === post.value?.user;
});
const editPostHandler = () => {
  router.push(`/edit-post/${post.value.id}`);
  
};

const deletePostHandler = async () => {
  if (confirm("Are you sure you want to delete this post?")) {
    try {
      await deletePost(post.value.id);
      alert("Post deleted successfully!");
      router.push("/"); // Redirect after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  }
};


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
    
    <div class="but">
      <button @click="editPostHandler" v-if="isOwner" >Edit</button>
    <button @click="deletePostHandler" v-if="isOwner" >Delete</button>
    <button type="button" v-else>Contact</button>
    </div>
    

    



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
.but{
    display: flex;
    justify-content: space-around;
} 
</style>
 