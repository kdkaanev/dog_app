<script setup>
import { ref, onMounted } from 'vue';
import { faUser, faCog, faSignOutAlt, faRegistered, faSign, faSignIn, faSignInAlt, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faUser, faCog, faSignOutAlt,faRegistered, faSignInAlt, faUser, faPhone,faEnvelope, faLocationDot);

defineProps({
  message: Object,
});

const selectedSender = ref(null);

const showSenderInfo = (sender) => {
  selectedSender.value = sender;
  console.log(selectedSender.value);
};


</script>

<template>

    <div clas="container-message">
      <span class="sender-name" @click="showSenderInfo(message.sender)">{{ message.sender.full_name }}</span>
        <p class="message">{{ message.message }}</p>
    </div>
    <div v-if="selectedSender" class="modal">
      <div class="modal-content">
        <h2>{{ selectedSender.full_name }}</h2>
        <p><font-awesome-icon icon="envelope" /> {{ selectedSender.user_email }}</p>
        <p><font-awesome-icon icon="phone" /> {{ selectedSender.phone_number }}</p>
        <button @click="selectedSender = null">Close</button>
      </div>
    </div>
</template>

<style scoped>
.container-message{
  display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    border-radius: 8px;
}
.sender-name{
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
    font-size: 1.5rem;
    color: #fa9338;
}
.sender-name:hover {
  text-decoration: underline;
}
.message{
    font-size: 1rem;
    color:black;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  background: #fa9338;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}
</style>