import axios from 'axios';


// Retrieve token from session storage
const token = sessionStorage.getItem('token');
// console.log('token from axios: ' ,token);
// Define base URLs for different environments
const baseURLs = `https://d-aggregate.com/Alphageekbackend/api`;

// Create an Axios instance with the appropriate base URL
const axiosInstance = axios.create({
  baseURL: baseURLs,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Authorization header if a token is present
if (token) {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
}


export default axiosInstance;
