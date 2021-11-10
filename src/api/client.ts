import axios from 'axios';

const apiClient = axios.create({ baseURL: 'https://www.accuweather.com/api' });

export default apiClient;
