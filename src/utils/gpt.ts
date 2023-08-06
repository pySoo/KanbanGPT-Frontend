import { toast } from 'react-toastify';

import { copyTextProps, generateSearchPromptProps, handleTextCopyProps } from '@/types/gpt';

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

const handleTextCopy = ({ callback, toastMessage, isRequirement }: handleTextCopyProps) => {
  try {
    callback();

    if (toastMessage) toast.success(toastMessage);

    if (isRequirement) {
      setTimeout(function () {
        window.open('https://chat.openai.com');
      }, 800);
    }
  } catch (error) {
    toast.error('복사에 실패했어요. 다시 시도해 주세요.');
  }
};

export const copyText = async ({ text, toastMessage, isRequirement }: copyTextProps) => {
  if (navigator.clipboard) {
    handleTextCopy({
      callback: async () => await navigator.clipboard.writeText(text),
      toastMessage,
      isRequirement,
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    handleTextCopy({
      callback: () => document.execCommand('copy'),
      toastMessage,
      isRequirement,
    });

    document.body.removeChild(textarea);
  }
};
