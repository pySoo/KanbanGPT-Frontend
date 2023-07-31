import { css } from '@emotion/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { devEnvironmentAtom } from '@/atoms/devEnvironmentAtom';
import { theme, ThemeType } from '@/styles/theme';

import HoverIcon from '../common/HoverIcon';
import CheckIcon from '../icons/CheckIcon';

export default function DevEnvironmentForm({ ...props }: React.ComponentProps<'form'>) {
  const [devState, setDevState] = useRecoilState(devEnvironmentAtom);
  const [framework, setFramework] = useState<string | undefined>(devState.framework);
  const [language, setLanguage] = useState<string | undefined>(devState.language);

  const updateDevState = () => {
    toast.success('개발 환경을 저장했어요!');
    setDevState({ framework, language });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>,
  ) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDevState();
  };

  return (
    <form onSubmit={handleSubmit} css={devEnvironmentFormStyle(theme)} {...props}>
      <input
        aria-label='dev-framework-input"'
        type="text"
        placeholder="이슈 프레임워크"
        value={framework}
        onChange={(e) => handleInputChange(e, setFramework)}
      />
      <input
        aria-label="dev-language-input"
        type="text"
        placeholder="개발 언어"
        value={language}
        onChange={(e) => handleInputChange(e, setLanguage)}
      />
      <button aria-label="dev-submit-btn" type="submit" className="dev-submit-btn">
        <HoverIcon icon={<CheckIcon />} />
      </button>
    </form>
  );
}

const devEnvironmentFormStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 4px;

  input {
    width: 120px;
    padding: 2px 5px;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 6px;
  }

  button {
    :hover {
      color: ${theme.colors.green};
    }
  }
`;
