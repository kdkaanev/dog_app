<script setup>
defineProps({
  post: Object,
});
</script>




<template>
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <div class="cart" :class="post.status === 'lost' ? 'lost' : 'found'">
        <img :src="post.photo_url" alt="Dog Image" />
        <h3>{{ post.status }}</h3>
      </div>
    </router-link>
  </template>
  
 
  

<style scoped>

.pics{
width: 100%;
border-radius: 8px;

}
.cart{
    
    width: 240px;
   
    text-align: center;
    background-color:transparent;
   
}
.lost{
    background-color: #f9b9b9;
}
.found{
    background-color: #b9f9b9;
}

</style>