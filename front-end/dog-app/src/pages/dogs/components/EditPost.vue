<script>
import AddPost from '../../dogs/components/AddPost.vue';
import { useUserStore } from "../../../stores/useUserStore";
import { ref } from "vue";
import { usePostStore } from '../../../stores/usePostSore';
import { getPostById } from '../../../servvices/postServises';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import FormFieldset from "../../components/FormFieldset.vue";
import DoubleRow from '../../components/DoubleRow.vue';
    export default {
        components: {
            AddPost,
            FormFieldset,
            DoubleRow
        },
        data() {
            const post = ref(null);
    return {
      formEdit: {
        title: "",
        breed: "",
        photo_url: "",
        description: "",
        last_seen_location: "",
        status: "",
      },
            };
        },

        setup() {
            return {
                userStore: useUserStore(),
                currentPost: usePostStore(),
                v$: useVuelidate(),
                
            };
        },
        validations() {
    return {
      formEdit: {
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
            async onEditPost() {
                const isValid = await this.v$.$validate();
                if (!isValid) {
                    return;
                }
                await this.currentPost.updatePosts(this.post.id, this.formEdit, );
                this.$router.push(`/dogs/${this.post.id}`);
            },
        },
        async mounted() {
            await this.userStore.reAuthUser();
            console.log(this.userStore.user);
            console.log(this.currentPost.post); 
        },
        async created() {
            const postId = this.$route.params.id;
            this.post = await getPostById(postId);
            this.formEdit.title = this.post.title;
            this.formEdit.breed = this.post.breed;
            this.formEdit.photo_url = this.post.photo_url;
            this.formEdit.description = this.post.description;
            this.formEdit.last_seen_location = this.post.last_seen_location;
            this.formEdit.status = this.post.status;

            console.log(this.post);
        },
    };

</script>





<template>
    <div class="form">
    <article>
      <form @submit.prevent="onEditPost">
     <DoubleRow>
      <FormFieldset title="Title" :errors="v$.formEdit.title.$errors">
        <input v-model="v$.formEdit.title.$model" type="text" />
      </FormFieldset>
      <FormFieldset title="Breed" :errors="v$.formEdit.breed.$errors">
        <input v-model="v$.formEdit.breed.$model" type="text" />
      </FormFieldset>
     </DoubleRow>
      <FormFieldset title="Photo URL" :errors="v$.formEdit.photo_url.$errors">
        <input v-model="v$.formEdit.photo_url.$model" type="text" />
      </FormFieldset>
      <FormFieldset title="Description" :errors="v$.formEdit.description.$errors">
        <input v-model="v$.formEdit.description.$model" type="text" />
      </FormFieldset>
      <FormFieldset title="Last Seen Location" :errors="v$.formEdit.last_seen_location.$errors">
        <input v-model="v$.formEdit.last_seen_location.$model" type="text" />
      </FormFieldset>

        <FormFieldset title="Status" :errors="v$.formEdit.status.$errors">
       
          <div class="radio">
            <DoubleRow>
          <label>
            Lost
            <input
              v-model="v$.formEdit.status.$model" type="radio" value="lost"
            >

          </label>
          <label>
            Found
            <input
              v-model="v$.formEdit.status.$model" type="radio" value="found"
            >

          </label>
        </DoubleRow>
        </div>
        
    
      </FormFieldset>
      <button type="submit">Edit Post</button>
    
     </form>
    </article>
    </div>
      </template>


