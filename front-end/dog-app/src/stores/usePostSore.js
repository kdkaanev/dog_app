import { defineStore } from "pinia";
import { addPost, getPostById, updatePost } from "../servvices/postServises";

export const usePostStore = defineStore("postStore", {
    state: () => ({
        posts: [],
    }),
    
    actions: {
        async createPost(postData) {
        try {
            const response = await addPost(postData);
            if (response) {
            return true;
            }
        } catch (error) {
            console.error("Post creation failed:", error);
            }
        
        return false;
        },
    
        async fetchPosts() {
        try {
            const response = await getPostById();
            if (response) {
            this.posts = response;
            return true;
            }
        } catch (error) {
            console.error("Fetching posts failed:", error);
        }
        return false;
        },
        async updatePosts(id, postData) {
        try {
            const response = await updatePost(id, postData);
            if (response) {
            return true;
            }
        } catch (error) {
            console.error("Post update failed:", error);
            }
                }
            }
        }
    );
