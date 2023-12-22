import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import ConnectToGptModal from '@/components/Toast/ConnectToGptModal';
import { CustomInstance } from '@/types/api';

const axiosInstance: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onError = (error: AxiosError) => {
  if (response) {
    if (response.status === 401) {
      toast.error(<ConnectToGptModal />, { autoClose: false });
    } else if (response.data?.error) {
      toast.error(response.data.error);
    }
  } else {
    toast.error('API 호출에 실패했습니다. 잠시 후 다시 시도해 주세요.');
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);

export default axiosInstance;
