
<script>
import { getAllPosts } from '../../servvices/postServises';
import PostCart from '../dogs/components/PostCart.vue';
import { useUserStore } from '../../stores/useUserStore';

export default {
  components: {
    PostCart,
  },
  setup() {
    return {
      userStore: useUserStore(),
      
    };
  },

  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await getAllPosts();
  },
  async mounted() {
    await this.userStore.reAuthUser();
  },
  
};
</script>




<template>
  <div>
    <div v-if="userStore.user">
      <router-link to="/user-posts">Add Post</router-link>
    </div>
    <article class="background">
      <PostCart v-for="post in posts" :key="post.id" :post="post" />
    </article>
  </div>
</template>




<style scoped>

.background{
    padding-top: 2rem;
    background: url(../../assets/final_logo.png)repeat;
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
