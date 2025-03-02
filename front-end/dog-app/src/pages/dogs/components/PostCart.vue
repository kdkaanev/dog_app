<script setup>
defineProps({
  post: Object,
  showMessageIcon: Boolean,

});
</script>




<template>
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <div class="cart" :class="post.status === 'lost' ? 'lost' : 'found'">
        <img :src="post.photo_url" alt="Dog Image" />
        <h3 class="status">{{ post.status }}</h3>
        <span v-if="post.has_messages && showMessageIcon" class="message-icon">📩</span>
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
.status {
 display: inline-block;

}
.message-icon {
  font-size: 1.5rem;
  display: inline-block;
  margin-left: 1rem;
}
</style>