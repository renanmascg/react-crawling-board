import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: 'https://crawling-backend.herokuapp.com',
});

export default api;
