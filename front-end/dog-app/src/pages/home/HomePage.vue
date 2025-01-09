<script>
import { getAllPosts } from '../../servvices/postServises';
import PostCart from '../dogs/components/PostCart.vue';

export default {
  components: {
    PostCart,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await getAllPosts();
  },
  computed: {
    lostPosts() {
      return this.posts.filter((post) => post.status === 'lost');
    },
    foundPosts() {
      return this.posts.filter((post) => post.status === 'found');
    },
  },
};

</script>

<template>

  <div>
   
   
    <article class="background">
    
      <PostCart v-for="post in posts" :key="post.id" :post="post"/>
     

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
