<script>
import FormFieldset from '../components/FormFieldset.vue';
import { useUserStore } from '../../stores/useUserStore';
import { usePostStore } from '../../stores/usePostSore'; 
import { useMessageStore } from '../../stores/useMessageSore';
import MessageCart from '../../pages/contact/components/MessageCart.vue';
export default {
    components: {
        FormFieldset,
        MessageCart,
    },
    setup() {
        return {
            userStore: useUserStore(),
            postStore: usePostStore(),
            messagesStore: useMessageStore(),
        };
    
},
data() {
    return {
    dogMessages: [],
    };
},
async created() {
    await this.messagesStore.fetchAllMessages();
    this.dogMessages = this.messagesStore.messages;
    console.log(this.dogMessages);
},
async mounted() {
    await this.userStore.reAuthUser();
},
    
};

</script>

<template>
    
    <article>
        <MessageCart v-for="message in dogMessages" :key="message.id" :message="message" />
            
    </article>
</template>