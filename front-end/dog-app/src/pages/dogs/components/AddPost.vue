


<script>
import { addPost, getPostById, updatePost } from "../../../servvices/postServises";
import FormFieldset from "../../components/FormFieldset.vue";
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useUserStore } from "../../../stores/useUserStore";
import DoubleRow from "../../components/DoubleRow.vue";

export default {
  components: {
    FormFieldset,
    DoubleRow,
  },
  setup() {
    return {
        v$: useVuelidate(),
        userStore: useUserStore(),
        
    };
  },
 
  data() {
    return {
      formAdd: {
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
      formAdd: {
        title: { required },
        breed: { required },
        photo_url: { required },
        description: { required },
        
        last_seen_location: { required },
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
      await addPost(this.formAdd);
      this.$router.push("/user-posts");
      
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
      <form @submit.prevent="onAddPost">
     <DoubleRow>
      <FormFieldset title="Name" :errors="v$.formAdd.title.$errors">
        <input v-model="v$.formAdd.title.$model" type="text" />
      </FormFieldset>
      <FormFieldset title="Breed" :errors="v$.formAdd.breed.$errors">
        <input v-model="v$.formAdd.breed.$model" type="text" />
      </FormFieldset>
     </DoubleRow>
      <FormFieldset title="Photo URL" :errors="v$.formAdd.photo_url.$errors">
        <input v-model="v$.formAdd.photo_url.$model" type="text" />
      </FormFieldset>
      <FormFieldset title="Description" :errors="v$.formAdd.description.$errors">
        <input v-model="v$.formAdd.description.$model" type="text" />
      </FormFieldset>
      <FormFieldset title="Last Seen Location" :errors="v$.formAdd.last_seen_location.$errors">
        <input v-model="v$.formAdd.last_seen_location.$model" type="text" />
      </FormFieldset>

        <FormFieldset title="Status" :errors="v$.formAdd.status.$errors">
       
          <div class="radio">
            <DoubleRow>
          <label>
            Lost
            <input
              v-model="v$.formAdd.status.$model" type="radio" value="lost"
            >

          </label>
          <label>
            Found
            <input
              v-model="v$.formAdd.status.$model" type="radio" value="found"
            >

          </label>
        </DoubleRow>
        </div>
        
    
      </FormFieldset>
      <button type="submit">Add Post</button>
    
     </form>
    </article>
    </div>
      </template>