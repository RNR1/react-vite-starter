import apiClient, { HTTPMethod } from './client';

// Declare your API calls here...
const API = {
  get: () => apiClient({ url: '/', method: HTTPMethod.GET }),
};

export default API;
