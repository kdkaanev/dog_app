<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import UserProfile from './UserProfile.vue';
export default {
  components: {
    FontAwesomeIcon,
    UserProfile,
    
  },
};

</script>



<template>
    <div>
        <h1>User Dashboard</h1>
        <p>Welcome to the User Dashboard!</p>
        <UserProfile />
    </div>
</template>