import { defineStore } from "pinia";
import { loginUser, getCurrentUser, logoutUser } from "../servvices/authServices";

// Utility to get cookies
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  console.log('match:', match);
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
      console.log('All cookies:', document.cookie);
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
    async logoutUser() {
      const success = await logoutUser();
      if (success) {
        this.user = null; // Clear user state
        console.log("User logged out.");
    }
  },
  },
});






// import { defineStore } from "pinia";
// import { loginUser, getCurrentUser } from "../servvices/authServices";

// const LOGIN_EXPIRES = 30;
// const COKIE_NAME = 'csrftoken';

// export const useUserStore = defineStore('userStore',{
//     state: () => ({
//         user: null,
//     }),
//     actions: {
//         async loginUser(logindata){
//           const response = await loginUser(logindata, LOGIN_EXPIRES);
//           if(!response) return false;

//           this.user = response; 
//         },
//         async reAuthUser() {
//           if (this.user)
//             return false;
//           const persistedUserToken = COKIE_NAME;
//           console.log('persistedUserToken:', persistedUserToken);
//           if (!persistedUserToken)
//             return false;
//           const profile = await getCurrentUser(persistedUserToken);
//           if (profile) {
//             this.user = profile;
//             return true;
//           }
//           return false;
//         }
//     },
//   });


