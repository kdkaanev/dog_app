<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "../../../stores/useUserStore";
import { deletePost} from "../../../servvices/postServises";
import MessgePage from "../../contact/MessagePage.vue";
import { usePostStore } from "../../../stores/usePostSore";

const route = useRoute();
const router = useRouter();
const post = ref(null);
const props = defineProps({
    posts: Object,
    user: Object,

});
const userStore = useUserStore();
const postStore = usePostStore();
const showMessge = ref(false);

postStore.fetchPostById(route.params.id).then((response) => {
  post.value = response;
  
  console.log("Post details:", post.value);
  console.log("User:", userStore.user);
  console.log("PostStore:", postStore.posts);
}).catch((error) => {
  console.error("Error fetching post details:", error);
});

// onMounted(async () => {
//   try {
//     const response = await axios.get(`http://127.0.0.1:8000/dogs/${route.params.id}`);
//     post.value = response.data;
//     console.log("Post details:", post.value);
//     console.log("User:", userStore.user);
//     console.log("PostStore:", postStore.posts);
   
    
//   } catch (error) {
//     console.error("Error fetching post details:", error);
//   }
  
// });
const isOwner = computed(() => {
  console.log("User:", userStore.user);
  console.log("PostStore:", postStore.posts);
  const user_id = userStore.user?.id;
  return user_id === postStore.posts.user;
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
const contactHandler = () => {
  if (!userStore.user) {
    router.push("/login");
    return;
  }
  showMessge.value = !showMessge.value;
};




</script>




<template>
    <div class="container">
      <article class="cart">

<div v-if="postStore.posts">
  <h1 v-if="postStore.posts.title">{{ postStore.posts.title}}</h1>
<img :src="postStore.posts.photo_url" alt="Dog Image" />
<h2>{{ postStore.posts.status }}</h2>
<p>{{ postStore.posts.description }}</p>
<p><strong>Breed:</strong> {{ postStore.posts.breed }}</p>
<p><strong>Last Seen:</strong> {{ postStore.posts.last_seen_location }}</p>
<p><strong>date:</strong> {{ postStore.posts.date_posted}}</p>

<div class="but">
<button @click="editPostHandler" v-if="isOwner" >Edit</button>
<button @click="deletePostHandler" v-if="isOwner" >Delete</button>
<button @click="contactHandler"  v-else>Contact</button>
</div>






</div>

<p v-else>Loading...</p>

</article>
<article>
<div class="message">
<MessgePage v-if="showMessge" />
</div>
</article>
    </div>
  
  </template>
  
 <style scoped>
 .container{
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
}

.cart{
    
    width: 360px;
   
    text-align: center;
    background-color:transparent;
   
}
.but{
    display: flex;
    justify-content: space-around;
} 
.message{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

</style>
 