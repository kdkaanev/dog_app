
<script>
import { getAllPosts } from '../../../servvices/postServises';
import PostCart from '../../dogs/components/PostCart.vue';
import { useUserStore } from '../../../stores/useUserStore';
import { usePostStore } from '../../../stores/usePostSore';

export default {
  components: {
    PostCart,
  },
  
  setup() {
    return {
      userStore: useUserStore(),
      postStore: usePostStore(),
      
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    filtredPosts() {
      if (!this.userStore.user) {
        return this.posts;
      }
      return this.posts.filter((post) => post.user !== this.userStore.user.id);
    },
  },
  async created() {
    await this.postStore.fetchAllPosts();
    this.posts = this.postStore.posts;
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
      <PostCart v-for="post in filtredPosts" :key="post.id" :post="post" />
    </article>
  </div>
</template>




<style scoped>

.background{
    padding-top: 2rem;
    background: url(../../../assets/final_logo.png);
    background-size: cover;
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
