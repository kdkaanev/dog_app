import axiosDA from '../config/axiosinstance';
// const getCsrfToken = () => {
//   const match = document.cookie.match(/csrftoken=([^;]+)/);
//   return match ? match[1] : null;
// };
axiosDA.defaults.withCredentials = true;
axiosDA.defaults.xsrfHeaderName = "X-CSRFToken";
axiosDA.defaults.xsrfCookieName = "csrftoken";

const ENDPOINT = 'dogs';
const USER_ENDPOINT = 'https://pawnpall.azurewebsites.net/posts/user/'

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


export async function getAllPosts() {
  try {
    const response = await axiosDA.get(`/${ENDPOINT}`);
    return response.data;
  }
  catch (error) {
    console.error('Error getting posts', error);
    return [];
  }
}

export async function getUserPosts() {
  try {
    const response = await axiosDA.get(USER_ENDPOINT, {
      withCredentials: true, // Include cookies for authentication
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    return [];
  }
}

export async function addPost(postData) {
  await fetchCSRFToken();
 
  try {
    const response = await axiosDA.post(`/${ENDPOINT}/`, postData, {
      
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding post:', error);
    return null;
  }
  
}
export async function getPostById(id) {
  try {
    const response = await axiosDA.get(`/${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting post:', error);
    return null;
  }
}
export async function updatePost(id, postData) {
  await fetchCSRFToken();
  try {
    const response = await axiosDA.put(`/${ENDPOINT}/${id}/`, postData, {

      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
}



export async function deletePost(id) {
  await fetchCSRFToken();
  try {
    const response = await axiosDA.delete(`/${ENDPOINT}/${id}/`, {
      
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    return null;
  }
}