<script setup>
import { ref } from 'vue';
import { getAllPosts } from '../../../servvices/postServises';

const props = defineProps({
    post: Object,
});
const emits = defineEmits(['select']);


</script>



<template>




 
       <article class="cart" :class="post.status">
        
        <img class="pics" :src="post.photo_url" alt="#">
        
            <h2>{{ post.status }}</h2>
            <b></b>
            <button @click.prevent="$emit('select','post')">Details</button>

       </article>

       
       
            


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