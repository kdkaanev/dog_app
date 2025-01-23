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
        first_name: '',
        last_name: '',
        phone_number: '',
      },
    };
  },
  validations() {
    return {
      form: {
        first_name: {required},
        last_name:{required},
        phone_number:{required},
      },
    };
  },
  methods: {
    async onUpdate() {
      const isValid = await this.v$.$validate();
      if (!isValid) {
        return;
      }
      await this.userStore.saveUserProfile(this.form);
      this.$router.push("/"); 
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
  <form @submit.prevent="onUpdate">
  <FormFieldset title="First Name" :errors="v$.form.first_name.$errors">
    <input v-model="v$.form.first_name.$model" type="text" placeholder="Enter First Name"/>
   </FormFieldset>
   <FormFieldset title="Last Name" :errors="v$.form.last_name.$errors">
    <input v-model="v$.form.last_name.$model" type="text" placeholder="Enter Last Name"/>
   </FormFieldset>
    <FormFieldset title="Phone number" :errors="v$.form.phone_number.$errors">
      <input 
      v-model="v$.form.phone_number.$model"
      type="number" placeholder="Enter Number"/>
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

