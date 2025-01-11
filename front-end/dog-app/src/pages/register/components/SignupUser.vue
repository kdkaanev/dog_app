<script setup>
import useVuelidate from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs } from '@vuelidate/validators';
import { computed, reactive, ref, toRefs, watch } from 'vue';
import FormFieldset from './FormFieldset.vue';
import { registerUser } from '../../../servvices/authServices/';
import { useRouter } from 'vue-router';


const router = useRouter();

const stateForm = ref({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
});

const rules = computed(() => {
  return{
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20),
      alphaNum,
    },
    password: {
      required: required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs(stateForm.value.password),
    },
    email: {
      required,
      email,
    },
  
}
  
});
const v$ = useVuelidate(rules, stateForm);



async function handleSubmit() {
  if (v$.value.$invalid) {
    return;
  }
  registerUser(stateForm.value);
  router.go(-1);
}
 
</script>


<template>
 <form submit.prevent="handleSubmit" >
  <FormFieldset title="Username" :errors="v$.username.$errors">
    <input v-model="v$.username.$model" type="text" placeholder="Enter Username"/>
   </FormFieldset>
    <FormFieldset title="Password" :errors="v$.password.$errors">
      <input 
      v-model="v$.password.$model"
      type="password" placeholder="Enter Password"/>
    </FormFieldset>
    <FormFieldset title="Confirm Password" :errors="v$.confirmPassword.$errors">
      <input 
      v-model="v$.confirmPassword.$model"
      type="password" placeholder="Confirm Password"/>
    </FormFieldset>
    <FormFieldset title="Email" :errors="v$.email.$errors">
      <input 
      v-model="v$.email.$model" 
      type="email" placeholder="Enter Email"/>
    </FormFieldset>

    <button @click.prevent="handleSubmit">Submit</button>
 </form>
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
  max-width: 500px;

}
</style>