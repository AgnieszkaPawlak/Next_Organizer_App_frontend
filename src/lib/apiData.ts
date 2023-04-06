import axios from 'axios';

export const apiData = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiData.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
