<script>
import FormFieldset from '../../register/components/FormFieldset.vue';
import useVuelidate from '@vuelidate/core';
import { getCurrentUser} from '../../../servvices/authServices';
import { useUserStore } from '../../../stores/useUserStore';
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faCog, faSignOutAlt, faRegistered, faSign, faSignIn, faSignInAlt, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faCog, faSignOutAlt,faRegistered, faSignInAlt, faUser, faPhone,faEnvelope, faLocationDot);
export default{
    name: 'UserProfile',
    components: {
        FormFieldset,
    },
    setup() {
        const userProfile = ref({
            username: '',
            email: '',
            dog_user: '',
        });

        return {
            v$: useVuelidate(),
            userStore: useUserStore(),
            userProfile,
        };

    },
    async mounted() {
    
    try {
      const profile = await getCurrentUser();
      this.userProfile = profile; // Assign fetched profile data
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
    
  
},
};

</script>





<template>
    <div class="user-profile">
      <h1>User Profile</h1>
      <div class="profile-card">
        <div class="profile-item">
          <font-awesome-icon icon="user" /> <strong>Name:</strong> {{ userProfile.dog_user.full_name}}
        </div>
        <div class="profile-item">
          <font-awesome-icon icon="envelope" /> <strong>email:</strong> {{ userProfile.email }}
        </div>
        <div class="profile-item">
          <font-awesome-icon icon="phone" /> <strong>Phone Number:</strong> {{ userProfile.dog_user.phone_number }}
        </div>
        <div class="profile-item">
          <font-awesome-icon icon="location-dot" /> <strong>Location:</strong> {{ userProfile.dog_user.location }}
        </div>
            <router-link to="/edit-profile">Edit Profile</router-link>
      
        
      </div>
      
    </div>
    
  </template>

<style scoped>
.user-profile, .user-profile-edit {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.profile-card {
  display: flex;
  flex-direction: column;
}

.profile-item, .form-item {
  margin-bottom: 10px;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

button {
  background: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
