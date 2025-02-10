import axiosDA from '../config/axiosinstance';

const getCsrfToken = () => {
    const match = document.cookie.match(/csrftoken=([^;]+)/);
    return match ? match[1] : null;
  };

const ENDPOINT = 'message';

export async function getAllMessages() {
    try {
        const response = await axiosDA.get(`/${ENDPOINT}/`);
        return response.data;
      }
      catch (error) {
        console.error('Error getting messages', error);
        return [];
      }
}
export async function sendMessage(messageData) {
    const csrfToken = getCsrfToken();
    console.log('CSRF Token:', csrfToken);
    console.log('messageData:', messageData);
  
    
    try {
        const response = await axiosDA.post(`/${ENDPOINT}/`, messageData, {
          withCredentials: true, // Include cookies for authentication
          headers: {
            'X-CSRFToken': csrfToken,
          },
        });
        console.log('Message sent:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error adding message:', error);
        return null;
      }
}