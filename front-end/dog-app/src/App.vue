<script>


import HeaderPage from '../src/components/HeaderPage.vue';
import Register from './pages/register/components/SignupUser.vue';
import Login from '../src/pages/users/components/LoginUser.vue';
import PostDetails from '../src/pages/dogs/components/PostDetails.vue';
import HomePage from './pages/home/HomePage.vue';
import PostCart from './pages/dogs/components/PostCart.vue';
import router from './config/router';



export default {
  components: {
    HeaderPage,
    HomePage,
    Register,
    Login,
    PostDetails,
    PostCart,
  },
  router,
}

</script>


<template>
  <article>
    <HeaderPage/>
    
  <main>
    <router-view />
  </main>
  </article>
</template>