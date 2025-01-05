import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';
import LostDogs from '../pages/dogs/components/LostDogs.vue';
import FoundDogs from '../pages/dogs/components/FoundDogs.vue';
import SignupUser from '../pages/users/components/SignupUser.vue';
import LoginUser from '../pages/users/components/LoginUser.vue';
import PostDetails from '../pages/dogs/components/PostDetails.vue';

const routes = [
  { path: '/', name: 'home', component:HomePage },
  { path: '/lost', name: 'lost', component: LostDogs },
  {path: '/found', name: 'found', component: FoundDogs},
  {path: '/adopting', name: 'adopting', component: FoundDogs},
  {path: '/register', name: 'register', component: SignupUser},
  {path: '/login', name: 'login', component: LoginUser},
  {path: '/post', name: 'post', component: PostDetails},


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
