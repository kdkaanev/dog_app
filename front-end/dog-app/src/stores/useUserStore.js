import { defineStore } from "pinia";
import { loginUser } from "../servvices/authServices";

const LOGIN_EXPIRES = 30;


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
    },
  });
