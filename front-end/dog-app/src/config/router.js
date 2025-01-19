import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';
import Register from '../pages/register/Register.vue';
import LoginUser from '../pages/users/components/LoginUser.vue';
import PostDetails from '../pages/dogs/components/PostDetails.vue';


const routes = [
  { path: '/', name: 'home', component:HomePage },
  {path: '/register', name: 'register', component: Register},
  {path: '/login', name: 'login', component: LoginUser},
  {path: '/dogs/:id', name: 'PostDetails', component: PostDetails, props: true},
  


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
