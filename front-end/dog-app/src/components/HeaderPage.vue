<script >
import { useUserStore } from '../stores/useUserStore';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faCog, faSignOutAlt, faRegistered, faSign, faSignIn, faSignInAlt, faDog } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faCog, faSignOutAlt,faRegistered, faSignInAlt, faUser, faDog)


export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      isDropdownOpen: false, 
      links: [
        
        { name: 'register', label: 'Register', icon: 'registered' },
        { name: 'login', label: 'Login', icon: 'right-to-bracket'},
        
  

      ],

    };
  },
 emits: ['select'],
 setup() {
   return {
     userStore: useUserStore(),
   };
 },

 methods: {
   async onLogOut() {
    const userStore = useUserStore();
      await userStore.logoutUser();
      this.$router.push("/"); 
      
   },
   toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdown;
      if (dropdown && !dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
 },
 computed: {
   userName() {
     return this.userStore.user?.username || "Guest";
   },
 },
  mounted() {
    // Close the dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
    this.userStore.reAuthUser();
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
 unmounted() {
   this.userStore.logoutUser();
 },

}
</script>


<template>


<nav>
  <div class="ico">
    <router-link to="/"><img src="../assets/icon.ico" alt="" width="60px"></router-link>
  </div>
  <p class="slogan">
        Where Lost Paws Find Their Way Home
    </p>
    <font-awesome-icon icon="fa-light fa-right-from-bracket" />
  
  

  
  <div class="dropdown" ref="dropdown">
    <a class="dropdown-icon" @click="toggleDropdown" href="#">
      <i class="icon-menu"></i> <button class="outline" type="button">{{ userName }}</button>
    </a>
    <div v-if="isDropdownOpen">
      <ul class="dropdown-menu" v-if="!userStore.user"  >
      <li v-for="link in links" :key="link.name">
          <router-link class="dropdown-menu-item" :to="{ name: link.name }" >
            <font-awesome-icon :icon="link.icon" /><span style="padding-right: 20px"></span>
            {{ link.label }}
          </router-link>
        
        </li>
        
      
    </ul>
    <ul class="dropdown-menu" v-if="userStore.user">
      <li><router-link :to="{ name: 'profile' }"><font-awesome-icon icon="user" /><span style="padding-right: 20px"></span> Profile</router-link></li>
      <li><router-link :to="{name: 'user-posts'}"><font-awesome-icon icon="dog" /><span style="padding-right: 20px"></span> Posts</router-link></li>
      <li ><a  v-on:click="onLogOut" href="#"><font-awesome-icon icon="right-from-bracket" /> <span style="padding-right: 20px"></span>Logout</a></li>

    </ul>
    </div>
    
  </div>

        
  
    </nav>
</template>

<style scoped>
@media (max-width: 600px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }
  .ico {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slogan {
    padding: 1rem;
    text-align: center;
  }
  .dropdown {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dropdown-menu {
    width: 100%;
  }
  .dropdown-menu li {
    padding: 10px;
  }
  .dropdown-menu li a,
  .dropdown-menu li button {
    font-size: small;
    text-decoration: none;
    color: #333;
    display: inline;
    width: 100%;
    text-align: center;
  }
  .dropdown-menu-item {
    margin: 0;
    white-space: pre;
  }
}
nav{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color:rgb(250 222 175);
  justify-content:space-around;
  gap: 1rem;
  border-radius: 4px;
  padding:0 1rem 0 1rem  ;
}
.slogan {
font-family: "Playwrite AU SA", serif;
  font-optical-sizing: auto;
  font-weight:bold;
  font-style: normal;
  padding: 1rem;
  flex-grow: 1;
  flex-basis: 200;
  
}
.ico{
  padding: 0.5rem;

 flex-grow: 1;
  flex-basis: 200;
  
} 
.nav-links{

  flex-grow: 1;
  flex-basis: 200;
}
.outline {
  margin: 0;
  background-color: #e4c498;
  border: 1px solid #e4c498;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}


.dropdown {
  padding: 0.5rem;
  
}

.dropdown-icon {
  text-decoration: none;
  margin: 0;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.dropdown-menu {
  
  position: absolute;
  width:max-content;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li a,
.dropdown-menu li button {
  font-size: small;
  text-decoration: none;
  color: #333;
  display: inline;
  width: 100%;
  text-align: left;
}
.dropdown-menu-item{
  margin: 0;
  white-space: pre;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}




</style>