import axios, { AxiosError, AxiosResponse } from 'axios';

import { CustomInstance } from '@/types/api';

const axiosInstance: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onError = (error: AxiosError) => {
  const { data } = error.response as AxiosResponse;
  switch (data.status) {
    case 401:
      // 유효성에 대한 안내 필요
      alert(data.error);
      break;
    default:
      alert(data.error);
      break;
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);

export default axiosInstance;
