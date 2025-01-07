<script>
export default {
 emits: ['select']

}
</script>


<template>


<nav>
      <ul>
        <li><a href="#" @click.prevent="$emit('select', 'HomePage')">Home</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'LostDogs')">Lost</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'FoundDogs')">Found</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'AdoptionDogs')">Adopting</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'register')">Register</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'login')">Login</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'PostDetails')">Posts</a></li>
        
      </ul>
    </nav>
</template>