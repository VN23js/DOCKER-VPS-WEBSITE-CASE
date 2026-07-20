import axios from 'axios';

const apiTs = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default apiTs;
