


<script>
import { addPost } from "../../../servvices/postServises";
import FormFieldset from "../../register/components/FormFieldset.vue";
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useUserStore } from "../../../stores/useUserStore";

export default {
  setup() {
    return {
        v$: useVuelidate(),
        userStore: useUserStore(),
        
    };
  },
  components: {
    FormFieldset,
  },
  data() {
    return {
      form: {
        title: '',
        breed: '',
        photo_url: '',
        description: '',
        last_seen_location: '',
        status: '',
      },
    };
  },
  validations() {
    return {
      form: {
        description: { required },
        photo_url: { required },
        status: { required },
      },
    };
  },
  methods: {
    async onAddPost() {
      const isValid = await this.v$.$validate();
      if (!isValid) {
        return;
      }
      await addPost(this.form);
      this.$router.push("/user-posts");
    },
  },
};


</script>

<template>
    <div class="form">
    <article>
      <form @submit.prevent="onAddPost">
     <input type="text">
    
     </form>
    </article>
    </div>
      </template>