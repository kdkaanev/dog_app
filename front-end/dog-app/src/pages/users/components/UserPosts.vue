<script>
import { getUserPosts } from "../../../servvices/postServises";
import PostCart from "../../dogs/components/PostCart.vue";
import { useUserStore } from "../../../stores/useUserStore";

export default {
    setup() {
    return {
      userStore: useUserStore(),
      
    };
  },
    components: {
        PostCart
    },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await getUserPosts();
  },
  async mounted() {
    await this.userStore.reAuthUser();
  },
};


</script>

<template>
    <div>
      <h2 class="slogan">{{ userStore.user.username }} Posts</h2>
      <article class="background">
        <router-link to="/add-post">Add</router-link>
        <PostCart v-for="post in posts" :key="post.id" :post="post" :showMessageIcon="true"/>
        
      </article>
    </div>
  </template>
  
  
  
  
  <style scoped>
  
  .background{
      padding-top: 2rem;
      background: url(../../../assets/final_logo.png)repeat;
      background-color:rgb(249 186 132);
      display: grid;
  
      grid-template-columns: repeat(auto-fill,240px);
      justify-content: center;
      gap:32px;
  }
  
  
  .slogan {
  font-family: "Playwrite AU SA", serif;
    font-optical-sizing: auto;
    font-weight:bold;
    font-style: normal;
  }
  
  
  </style>
  