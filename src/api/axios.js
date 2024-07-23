// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: { 'Content-Type': 'application/json' } // Optional: Set default headers
});

// Optional: Add interceptors to handle requests and responses globally
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config if needed
    // e.g., add authorization token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
