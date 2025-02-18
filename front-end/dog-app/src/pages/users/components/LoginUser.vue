<script >
import FormFieldset from '../../components/FormFieldset.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import { useUserStore } from '../../../stores/useUserStore';
import { useRouter, useRoute } from 'vue-router';


export default {
  components: {
    FormFieldset,
  },
  setup() {
    return {
      v$: useVuelidate(),
      userStore: useUserStore(),
      route : useRoute(),
      router: useRouter(),
      
    };
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      form: {
        username: {required},
        password:{required},
      },
    };
  },

  methods: {
    async onLogin() {
      const isValid = await this.v$.$validate();
      if (!isValid) {
        return;
      }
      await this.userStore.loginUser(this.form);
      const redirect = this.route.query.redirect || "/";
      this.$router.push(redirect);
    },
  },
  async mounted() {
    await this.userStore.reAuthUser();
  },
};



</script>


<template>
<div class="form">
<article>
  <form @submit.prevent="onLogin">
    <p>Don't have an account?  <router-link to="/register">Sign up</router-link></p>
    
    <h5>OR</h5>

  <FormFieldset  :errors="v$.form.username.$errors">
    <input v-model="v$.form.username.$model" type="text" placeholder="Enter Username"/>
   </FormFieldset>
    <FormFieldset  :errors="v$.form.password.$errors">
      <input 
      v-model="v$.form.password.$model"
      type="password" placeholder="Enter Password"/>
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

