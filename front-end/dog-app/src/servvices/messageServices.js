import axiosDA from '../config/axiosinstance';

axiosDA.defaults.withCredentials = true;
axiosDA.defaults.xsrfHeaderName = "X-CSRFToken";
axiosDA.defaults.xsrfCookieName = "csrftoken";


// const getCsrfToken = () => {
//   const match = document.cookie.match(/csrftoken=([^;]+)/);
//   return match ? match[1] : null;
// };

async function fetchCSRFToken() {
  const response = await axiosDA.get("https://pawnpall.azurewebsites.net/csrf/");
  document.cookie = `csrftoken=${response.data.csrfToken}; path=/`;
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    document.cookie.split(";").forEach(cookie => {
      const trimmed = cookie.trim();
      if (trimmed.startsWith(name + "=")) {
        cookieValue = trimmed.substring(name.length + 1);
      }
    });
  }
  return cookieValue;
}
const ENDPOINT = 'message';

export async function getAllMessages() {
    try {
        const response = await axiosDA.get(`/${ENDPOINT}/`, {
          withCredentials: true, // Include cookies for authentication
          
        });
        return response.data;
      }
      catch (error) {
        console.error('Error getting messages', error);
        return [];
      }
}
export async function sendMessage(messageData) {
    await fetchCSRFToken();
    
  
    
    try {
        const response = await axiosDA.post(`/${ENDPOINT}/`, messageData, {
       
          headers: {
            'X-CSRFToken': getCookie('csrftoken'),
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error adding message:', error);
        return null;
      }
}