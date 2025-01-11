import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';
import SignupUser from '../pages/users/components/SignupUser.vue';
import LoginUser from '../pages/users/components/LoginUser.vue';
import PostDetails from '../pages/dogs/components/PostDetails.vue';

const routes = [
  { path: '/', name: 'home', component:HomePage },
  {path: '/register', name: 'register', component: SignupUser},
  {path: '/login', name: 'login', component: LoginUser},
  {path: '/dogs/:id', name: 'PostDetails', component: PostDetails, props: true},


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
