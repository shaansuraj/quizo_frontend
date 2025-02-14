import axios from 'axios';

/**
 * @file api.ts
 * @desc Exports a configured Axios instance for backend API calls.
 */

const api = axios.create({
  baseURL: 'https://quizo-backend-brm8.onrender.com/api', // My Node server on Render + /api
});

export default api;
