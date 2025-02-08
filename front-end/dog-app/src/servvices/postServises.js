import axiosDA from '../config/axiosinstance';
const getCsrfToken = () => {
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : null;
};


const ENDPOINT = 'dogs';
const USER_ENDPOINT = 'http://127.0.0.1:8000/posts/user/'

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
  const csrfToken = getCsrfToken();
  console.log('CSRF Token:', csrfToken);
  console.log('postData:', postData);
  try {
    const response = await axiosDA.post(`/${ENDPOINT}/`, postData, {
      withCredentials: true, // Include cookies for authentication
      headers: {
        'X-CSRFToken': csrfToken,
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
  const csrfToken = getCsrfToken();
  try {
    const response = await axiosDA.put(`/${ENDPOINT}/${id}/`, postData, {
      withCredentials: true, // Include cookies for authentication
      headers: {
        'X-CSRFToken': csrfToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
}



export async function deletePost(id) {
  const csrfToken = getCsrfToken();
  try {
    const response = await axiosDA.delete(`/${ENDPOINT}/${id}/`, {
      withCredentials: true, // Include cookies for authentication
      headers: {
        'X-CSRFToken': csrfToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    return null;
  }
}