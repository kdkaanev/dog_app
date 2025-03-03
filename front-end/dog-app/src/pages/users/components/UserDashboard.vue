<script>
import { useUserStore } from '../../../stores/useUserStore';
import { usePostStore } from '../../../stores/usePostSore';
import { useMessageStore } from '../../../stores/useMessageSore';
export default {
  props: {
    message: Object,
  },
  setup() {
    return {
      userStore: useUserStore(),
      postStore: usePostStore(),
      messagesStore: useMessageStore(),
    };
  },
  data() {
    return {
      dogMessages: [],
    };
  },
  async created() {
    await this.messagesStore.fetchAllMessages();
    this.dogMessages = this.messagesStore.messages;
    
  },
  async mounted() {
    await this.userStore.reAuthUser();
  },
  computed: {
    filtredMessages() {
      if (!this.userStore.user) {
        return this.dogMessages;
      }
      return this.dogMessages.filter((message) => message.dog === this.postStore.posts.id);
    },
  },
};
  

</script>



<template>
    <div>
        <h1>User Dashboard</h1>
        <p>Welcome to the User Dashboard!</p>
    <div class="user-profile">
      <h1>User Profile</h1>
      <div class="profile-card">
        <div class="profile-item">
          <font-awesome-icon icon="user" /> <strong>Name:</strong > {{ this.dogMessages[0].sender.full_name}}
        </div>
        <div class="profile-item">
          <font-awesome-icon icon="envelope" /> <strong>email:</strong> {{ this.dogMessages[0].sender.email }}
        </div>
        <div class="profile-item">
          <font-awesome-icon icon="phone" /> <strong>Phone Number:</strong> {{this.dogMessages[0].sender.phone_number }}
        </div>
        
            
      
        
      </div>
      
    </div>
    
  
      
    </div>
</template>