import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crawling-backend.herokuapp.com',
});

export default api;
