<script>
import FormFieldset from '../../register/components/FormFieldset.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { loginUser } from '../../../servvices/authServices';
import { useUserStore } from '../../../stores/useUserStore';

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
  mounted() {
    this.userStore.reAuthUser();
  },
  methods: {
    async onLogin() {
      const isValid = await this.v$.$validate();
      if (!isValid) {
        return;
      }
      await this.userStore.loginUser(this.form);
    },
  },
};


</script>


<template>
<div class="form">
<article>
  <form @submit.prevent="onLogin">
  <FormFieldset title="Username" :errors="v$.form.username.$errors">
    <input v-model="v$.form.username.$model" type="text" placeholder="Enter Username"/>
   </FormFieldset>
    <FormFieldset title="Password" :errors="v$.form.password.$errors">
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

