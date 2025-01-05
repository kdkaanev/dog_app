import axios from 'axios';

const axiosJD = axios.create({
  baseURL: 'https://dummyjson.com',
});
export default axiosJD;
