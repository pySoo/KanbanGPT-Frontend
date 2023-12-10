import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface CustomInstance extends AxiosInstance {
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
}

export type CustomResponseFormat<T = unknown> = {
  status: number;
  data?: T;
};

export type GptResponseType = {
  message: string;
};

export type postCodeGenerationProps = {
  prompt: string;
  apiKey: string;
};
