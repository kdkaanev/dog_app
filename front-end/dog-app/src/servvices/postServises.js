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