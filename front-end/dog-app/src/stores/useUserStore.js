import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { authenticateUser, getCurrentUser } from '../services/authServices';
import { getCookie, setCookie } from '../utils/cookieUtils';

const LOGIN_EXPIRATION_MINS = 30;
const COKIE_NAME = 'userToken';

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null);

  const isUserLoged = computed(() => !!user.value?.username);

  async function loginUser(loginData) {
    const profile = await authenticateUser(loginData, LOGIN_EXPIRATION_MINS);
    if (!profile)
      return false;
    user.value = profile;
    setCookie('userToken', profile.accessToken, LOGIN_EXPIRATION_MINS);
  }
  async function reAuthUser() {
    if (user.value)
      return false;
    const persistedUserToken = getCookie(COKIE_NAME);
    if (!persistedUserToken)
      return false;
    const profile = await getCurrentUser(persistedUserToken);
    if (profile) {
      user.value = profile;
      return true;
    }
    return false;
  }
  return {
    user,
    isUserLoged,
    loginUser,
    reAuthUser,
  };
});
