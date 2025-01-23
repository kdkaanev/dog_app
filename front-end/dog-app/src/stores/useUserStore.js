import { defineStore } from "pinia";
import { loginUser, getCurrentUser, logoutUser, saveUserProfile } from "../servvices/authServices";

// Utility to get cookies
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}
const csrfToken = getCookie('csrftoken');
console.log('CSRF Token:', csrfToken);
export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null, // Holds the current user data
  }),

  actions: {
    async loginUser(loginData) {
      try {
        const response = await loginUser(loginData);
        if (response) {
          this.user = response; // Store user data on successful login
          return true;
        }
        
        
      } catch (error) {
        console.error("Login failed:", error);
      }
      return false;
    },

    async reAuthUser() {
      try {
        // Check if the user is already authenticated in the state
        if (this.user) {
          return true;
        }

        // Fetch the CSRF token from cookies
        const csrfToken = getCookie("csrftoken");
        if (!csrfToken) {
          console.warn("CSRF token not found in cookies.");
          return false;
        }

        // Fetch user profile with the CSRF token
        const profile = await getCurrentUser(csrfToken);
        if (profile) {
          this.user = profile; // Update state with user data
          return true;
        }
      } catch (error) {
        console.error("Re-authentication failed:", error);
      }

      return false;
    },
    async saveUserProfile(profileData) {
      try {
        const response = await saveUserProfile(profileData);
        if (response) {
          this.user = response; // Update user state with new data
          return true;
        }
      } catch (error) {
        console.error("Error saving user profile:", error);
      }
      return false;
    },
    async logoutUser() {
      const success = await logoutUser();
      if (success) {
        this.user = null; // Clear user state
        console.log("User logged out.");
    }
  },
  },
});




