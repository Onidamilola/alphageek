// utils/AxiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://d-aggregate.com/Alphageekbackend/api`,
  // other default config options...
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor to include bearer token in headers
axiosInstance.interceptors.request.use(
  config => {
    console.log("Interceptor triggered");
    const token = sessionStorage.getItem('token');
    console.log("Token:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log("Interceptor error triggered");
    return Promise.reject(error);
  }
);

export default axiosInstance;