import Cookies from 'js-cookie';

export const getCookie = field => Cookies.get(field);

export function setCookie(name, value, expiresInMin) {
  const expires = new Date(new Date().getTime() + expiresInMin * 60000);
  Cookies.set(name, value, { expires });
}
