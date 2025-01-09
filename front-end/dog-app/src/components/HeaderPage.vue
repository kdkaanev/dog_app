<script >
export default {
 emits: ['select']

}
</script>


<template>


<nav>
  <a href="#" @click.prevent="$emit('select', 'HomePage')"><img src="../assets/icon.ico" alt="" width="60px"></a>
  <p class="slogan">
        Where Lost Paws Find Their Way Home
    </p>
  
      <ul>
        <li><a href="#" @click.prevent="$emit('select', 'LostDogs')">Lost</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'FoundDogs')">Found</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'AdoptionDogs')">Adopting</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'register')">Register</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'login')">Login</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'PostDetails')">Posts</a></li>
        
      </ul>
    </nav>
</template>

<style scoped>
nav{
  display: flex;
  background-color:rgb(250 222 175);
  justify-content: space-between;
  border-radius: 4px;
  padding:0 1rem 0 1rem  ;
}
.slogan {
font-family: "Playwrite AU SA", serif;
  font-optical-sizing: auto;
  font-weight:bold;
  font-style: normal;
  padding: 1rem;
}


</style>