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
    background-color: hsl(177.14deg 94.34% 37.91%);
    display: grid;

    grid-template-columns: repeat(auto-fill,240px);
    justify-content: start;
    gap:32px;
}

</style>