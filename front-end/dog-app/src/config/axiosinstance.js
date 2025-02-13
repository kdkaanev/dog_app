import axios from 'axios';

const axiosDA = axios.create({
  baseURL: 'https://pawnpall.azurewebsites.net/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosDA;
