import axios from 'axios';

/**
 * @file api.ts
 * @desc Exports a configured Axios instance for backend API calls.
 */

// Get API base URL from environment variables, fallback to local if undefined
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
