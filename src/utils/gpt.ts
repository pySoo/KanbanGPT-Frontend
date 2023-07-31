import { toast } from 'react-toastify';

import { copyTextProps, generateSearchSentenceProps } from '@/types/gpt';

export const generateSearchSentence = ({
  title,
  framework,
  language,
}: generateSearchSentenceProps) => {
  let sentence = '';
  if (framework) {
    sentence += `${framework} 프레임워크에서 `;
  }
  if (language) {
    sentence += `${language} 언어로 `;
  }
  sentence += `${title} 구현하는 코드를 구현해줘`;

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
