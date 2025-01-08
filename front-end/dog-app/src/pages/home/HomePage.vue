<script setup>

import PostCart from '../dogs/components/PostCart.vue';


</script>

<template>

   
   
   
   
    <article class="background">
      
      <PostCart/>

    </article>
    

</template>

<style scoped>
.background{
    background: url(../../assets/final_logo.png)repeat;
    background-color:rgb(249 186 132);
    display: grid;

    grid-template-columns: repeat(auto-fill,240px);
    justify-content: start;
    gap:32px;
}


.slogan {
font-family: "Playwrite AU SA", serif;
  font-optical-sizing: auto;
  font-weight:bold;
  font-style: normal;
}


</style>
