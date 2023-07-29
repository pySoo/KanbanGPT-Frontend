import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import ConnectToGptInfo from '@/components/Toast/ConnectToGptInfo';
import { CustomInstance } from '@/types/api';

const axiosInstance: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onError = (error: AxiosError) => {
  const response = error.response as AxiosResponse;
  const { data } = response;
  switch (response.status) {
    case 401:
      toast.error(<ConnectToGptInfo />, { autoClose: false });
      break;
    default:
      toast.error(data.error);
      break;
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);

export default axiosInstance;
