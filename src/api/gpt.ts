import { CustomResponseFormat, GptResponseType, postCodeGenerationProps } from '@/types/api';

import axiosInstance from './axiosInstance';

const CODE_GENERATION_END_POINT = '/api/code-generation';

export const gptApi = {
  postCodeGeneration: ({ prompt, apiKey }: postCodeGenerationProps) =>
    axiosInstance.post<CustomResponseFormat<GptResponseType>>(CODE_GENERATION_END_POINT, {
      prompt,
      apiKey,
    }),
};

export const postCodeGeneration = async ({ prompt, apiKey }: postCodeGenerationProps) => {
  try {
    const response = await axiosInstance.post<CustomResponseFormat<GptResponseType>>(
      CODE_GENERATION_END_POINT,
      {
        prompt,
        apiKey,
      },
    );
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
};
