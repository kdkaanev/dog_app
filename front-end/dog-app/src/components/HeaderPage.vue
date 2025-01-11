<script >
export default {
 emits: ['select']

}
</script>


<template>


<nav>
  <div class="ico">
    <router-link to="/"><img src="../assets/icon.ico" alt="" width="60px"></router-link>
    <!-- <a href="#" @click.prevent="$emit('select', 'HomePage')"><img src="../assets/icon.ico" alt="" width="60px"></a> -->
  </div>
  <p class="slogan">
        Where Lost Paws Find Their Way Home
    </p>
  
      <ul>
        <ul>

  <li><router-link to="/register">Register</router-link></li>
  <li><router-link to="/login">Login</router-link></li>
  
</ul>

        
      </ul>
    </nav>
</template>

<style scoped>
nav{
  display: flex;
  background-color:rgb(250 222 175);
  justify-content: space-between;
  gap: 3rem;
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
.ico{
  padding: 0.5rem;
 
  
} 



</style>