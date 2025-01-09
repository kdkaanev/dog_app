<script setup>
import PostCart from '../../dogs/components/PostCart.vue';
</script>




<template>
    <article class="background">
      
        <PostCart />

    </article>
</template>

<style scoped>
.background{
    background-color: rgb(232 133 133);
    display: grid;

    grid-template-columns: repeat(auto-fill,240px);
    justify-content: start;
    gap:32px;
}

</style>