<script>


import HeaderPage from '../src/components/HeaderPage.vue';
import LostDogs from '../src/pages/dogs/components/LostDogs.vue';
import FoundDogs from '../src/pages/dogs/components/FoundDogs.vue';
import AdoptionDogs from '../src/pages/dogs/components/AdoptionDogs.vue';
import Register from '../src/pages/users/components/SignupUser.vue';
import Login from '../src/pages/users/components/LoginUser.vue';
import PostDetails from '../src/pages/dogs/components/PostDetails.vue';



export default {
  components: {
    HeaderPage,
    LostDogs,
    FoundDogs,
    AdoptionDogs,
    Register,
    Login,
    PostDetails
  },
  data() {
    return {
      page: 'home'
    }
  },
  methods: {
    onSelect(newPage) {
      this.page = newPage;
      
    }
  }
}

</script>


<template>
  <HeaderPage @select="onSelect"/>
  <main>
    <component :is="page"/>
  </main>
</template>