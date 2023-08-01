import { toast } from 'react-toastify';

import { copyTextProps, generateSearchPromptProps } from '@/types/gpt';

export const generateSearchPrompt = ({ title, framework, language }: generateSearchPromptProps) => {
  let sentence = '';
  if (framework) {
    sentence += `[프레임워크: ${framework}] `;
  }
  if (language) {
    sentence += `[사용 언어: ${language}] \n`;
  }
  sentence += `${title} 구현하는 코드를 만들어줘`;

  return sentence;
};

export const copyText = async ({ text, toastMessage, isRequirement }: copyTextProps) => {
  try {
    await navigator.clipboard.writeText(text);
    if (toastMessage) toast.success(toastMessage);
    if (isRequirement) {
      setTimeout(() => {
        window.open('https://chat.openai.com', '_blank');
      }, 1200);
    }
  } catch (e) {
    toast.error('복사에 실패했어요. 다시 시도해 주세요.');
  }
};
