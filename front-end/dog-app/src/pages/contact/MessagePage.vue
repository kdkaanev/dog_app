<script>

import FormFieldset from '../components/FormFieldset.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useUserStore } from '../../stores/useUserStore';
import { usePostStore } from '../../stores/usePostSore';

export default {
    props: {
        Response: Object,
    },
    components: {
        FormFieldset,
    },
    setup() {
        return {
            v$: useVuelidate(),
            userStore: useUserStore(),
            postStore: usePostStore(),
            res: Response,
        };
    },
    data() {
        return {
            form: {
                message: '',
                sender: this.userStore.user.id,
                recipient: this.postStore.posts.dog_user_id,
                dog: this.postStore.posts.id,
            },
        };
    },
    validations() {
        return {
            form: {
                message: { required },
                recipient : { required },
                dog : { required },
            },
        };
    },
    methods: {
        async onSubmit() {
            const isValid = await this.v$.$validate();
            
            if (!isValid) {
                console.error("Form is invalid");
                return;
            }
           
            await this.userStore.sendMessage(this.form);
            this.$router.push("/");
        },
    },
};

</script>




<template>
    
    <form @submit.prevent="onSubmit">
        <FormFieldset title="Message" :errors="v$.form.message.$errors">
            <label for="name">Message</label>
            <input v-model="v$.form.message.$model" type="text" />
        </FormFieldset>
        <button type="submit">Send</button>

    </form>
</template>