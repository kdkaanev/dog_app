import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';
import Register from '../pages/register/Register.vue';
import LoginUser from '../pages/users/components/LoginUser.vue';
import PostDetails from '../pages/dogs/components/PostDetails.vue';
import UserProfile from '../pages/users/components/UserProfile.vue';
import EditProfile from '../pages/users/components/EditProfile.vue';
import UserDashboard from '../pages/users/components/UserDashboard.vue';
import UserPosts from '../pages/users/components/UserPosts.vue';
import AddPost from '../pages/dogs/components/AddPost.vue';
import EditPost from '../pages/dogs/components/EditPost.vue';



const routes = [
  { path: '/', name: 'home', component:HomePage },
  {path: '/register', name: 'register', component: Register},
  {path: '/login', name: 'login', component: LoginUser},
  {path: '/dogs/:id', name: 'PostDetails', component: PostDetails, props: true},
  {path: '/profile', name: 'profile', component: UserProfile},
  {path: '/edit-profile', name: 'edit-profile', component: EditProfile},
  {path: '/dashboard', name: 'dashboard', component: UserDashboard},
  {path: '/user-posts', name: 'user-posts', component: UserPosts},
  {path: '/add-post', name: 'add-post', component: AddPost},
  {path: '/edit-post/:id', name: 'edit-post', component: EditPost, props: true},

  


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
