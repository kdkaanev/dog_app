import axiosDA from '../config/axiosinstance';

const ENDPOINT = 'dogs';

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
    const response = await axiosDA.get('http://127.0.0.1:8000/posts/user/', {
      withCredentials: true, // Include cookies for authentication
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    return [];
  }
}