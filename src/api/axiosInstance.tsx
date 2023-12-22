import axios, { AxiosError, AxiosResponse } from 'axios';

import { CustomInstance } from '@/types/api';

const axiosInstance: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onError = (error: AxiosError) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);

export default axiosInstance;
