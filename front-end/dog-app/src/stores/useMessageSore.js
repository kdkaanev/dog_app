import { defineStore } from "pinia";
import { getAllMessages, sendMessage } from "../servvices/messageServices";

export const useMessageStore = defineStore("messageStore", {
    state: () => ({
        messages: null,
    }),
    actions: {
        async fetchAllMessages() {
            try {
                const response = await getAllMessages();
                if (response) {
                    this.messages = response;
                    return true;
                }
            } catch (error) {
                console.error("Fetching messages failed:", error);
            }
            return false;
        },
        async createMessage(messageData) {
            try {
                const response = await sendMessage(messageData);
                if (response) {
                    return true;
                }
            } catch (error) {
                console.error("Message creation failed:", error);
            }
            return false;
        }
    }
});