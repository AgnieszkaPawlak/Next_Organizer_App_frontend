import axios from 'axios';

export const apiTodo = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
    'Content-Type': 'application/json',
    },
  });

  apiTodo.interceptors.response.use(
    (response) => {
    return response.data;
    },
    (error) => {

    console.error(error);
return Promise.reject(error);
}
);
  