<script >
import FormFieldset from '../../register/components/FormFieldset.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useUserStore } from '../../../stores/useUserStore';
import { saveUserProfile } from '../../../servvices/authServices';

export default {
  components: {
    FormFieldset,
  },
  setup() {
    return {
      v$: useVuelidate(),
      userStore: useUserStore(),
      
    };
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      },
    };
  },
  validations() {
    return {
      form: {
        firstName: {required},
        lastName:{required},
        phoneNumber:{required},
      },
    };
  },

 
  async mounted() {
    try {
      const profile = await saveUserProfile();
      this.userProfile = profile; // Assign fetched profile data
      console.log('User profile:', profile);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
    await this.userStore.reAuthUser();
  },
};



</script>


<template>
<div class="form">
<article>
  <form @submit.prevent="onLogin">
  <FormFieldset title="First Name" :errors="v$.form.firstName.$errors">
    <input v-model="v$.form.firstName.$model" type="text" placeholder="Enter First Name"/>
   </FormFieldset>
   <FormFieldset title="Last Name" :errors="v$.form.lastName.$errors">
    <input v-model="v$.form.lastName.$model" type="text" placeholder="Enter Last Name"/>
   </FormFieldset>
    <FormFieldset title="Phone number" :errors="v$.form.phoneNumber.$errors">
      <input 
      v-model="v$.form.phoneNumber.$model"
      type="number" placeholder="Enter Password"/>
    </FormFieldset>
  
    

    <button type="submit">Submit</button>

 </form>
</article>
</div>
  </template>


<style scoped>
.form  {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.form article {
  width: 100%;
  max-width: 600px;

}
</style>

