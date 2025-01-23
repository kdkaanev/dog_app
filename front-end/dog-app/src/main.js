import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './config/router'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faCog, faSignOutAlt, faRegistered, faSign, faSignIn, faSignInAlt, faPhoneAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faCog, faSignOutAlt,faRegistered, faSignInAlt, faPhoneVolume, faPhoneAlt, faSignIn, faSign);


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
