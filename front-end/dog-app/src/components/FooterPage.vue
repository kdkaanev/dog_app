<script>
import { useUserStore } from '../stores/useUserStore';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faCog, faSignOutAlt, faRegistered, faSign, faSignIn, faSignInAlt, faDog} from '@fortawesome/free-solid-svg-icons';


</script>


<template>
    <footer>
        <div class="ico">
    <img src="../assets/icon.ico" alt="" width="60px">
   
  </div>
  <ul class="links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="#">About</router-link></li>
      <li><router-link to="#">Contact</router-link></li>

    </ul>
    <ul class="social">
      <li><a href="#"><font-awesome-icon :icon="['fab', 'square-facebook']" /></a></li>
      <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
      <li><a href="#"><font-awesome-icon :icon="['fab', 'square-instagram']" /></a></li>
      <li><a href="https://github.com/kdkaanev"><font-awesome-icon :icon="['fab', 'square-github']" /></a></li>
    </ul>
    <div class="copirigth">
    
      <p>&copy; 2021 PawPal</p>
    </div>
    </footer>

</template>


<style scoped>
@media (max-width: 600px) {
    footer {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "logo"
            "links"
            "social"
            "copirigth";
    }
    .ico {
        padding: 0;
        grid-area: logo;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .links {
        padding: 0;
        grid-area: links;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .social {
        grid-area: social;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .copirigth {
        border-top: 1px solid #fa9338 ;
        grid-area: copirigth;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        list-style-type: none;
        padding: 10px;
    }
}
    footer {
        
        margin: 8px 0 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "logo links social"
            "copirigth copirigth copirigth";
  background-color:rgb(250 222 175);
  justify-items: stretch;
  border-radius: 4px;
  
    }
    .ico {
        padding: 0;
        grid-area: logo;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        
    }
    .links {
        padding: 0;
        grid-area: links;
        display: flex;
        justify-content:space-between;
        align-items: center;

    }
    .social {
        grid-area: social;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .copirigth {
        border-top: 1px solid #fa9338 ;
        grid-area: copirigth;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        list-style-type: none;
        padding: 10px;
        
    }
  
</style>