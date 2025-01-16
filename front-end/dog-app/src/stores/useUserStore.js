import { defineStore } from "pinia";
import { loginUser } from "../servvices/authServices";

const LOGIN_EXPIRES = 30;
const COKIE_NAME = 'csrftoken';

export const useUserStore = defineStore('userStore',{
    state: () => ({
        user: null,
    }),
    actions: {
        async loginUser(logindata){
          const response = await loginUser(logindata, LOGIN_EXPIRES);
          if(!response) return false;

          this.user = response; 
        },
        async reAuthUser() {
          if (user.value)
            return false;
          const persistedUserToken = getCookie(COKIE_NAME);
          console.log('persistedUserToken:', persistedUserToken);
          if (!persistedUserToken)
            return false;
          const profile = await getCurrentUser(persistedUserToken);
          if (profile) {
            user.value = profile;
            return true;
          }
          return false;
        }
    },
  });
