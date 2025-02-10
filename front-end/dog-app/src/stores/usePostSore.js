import { defineStore } from "pinia";
import { addPost,getUserPosts, updatePost, getAllPosts, getPostById } from "../servvices/postServises";

export const usePostStore = defineStore("postStore", {
    state: () => ({
        posts: null,
    }),
    
    actions: {
        async fetchAllPosts() {
        try {
            const response = await getAllPosts();
            if (response) {
            this.posts = response;
            return true;
            }
        } catch (error) {
            console.error("Fetching posts failed:", error);
        }
        return false;
        },



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
            const response = await getUserPosts();
            if (response) {
            this.posts = response;
            return true;
            }
        } catch (error) {
            console.error("Fetching posts failed:", error);
        }
        return false;
        },
        async fetchPostById(id) {
        try {
            const response = await getPostById(id);
            if (response) {
            this.posts = response;
            return true;
            }
        } catch (error) {
            console.error("Fetching post failed:", error);
        }
        return null;
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
