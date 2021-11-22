import axios from 'axios';

const baseURL: string = (import.meta.env.VITE_API_URL as string) ?? '';

const apiClient = axios.create({ baseURL });

export default apiClient;
