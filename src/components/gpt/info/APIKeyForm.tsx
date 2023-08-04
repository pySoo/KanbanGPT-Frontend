import { css } from '@emotion/react';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { gptAtom } from '@/atoms/gptAtom';
import HoverIcon from '@/components/common/HoverIcon';
import CheckIcon from '@/components/icons/CheckIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import useInput from '@/hooks/useInput';
import { theme, ThemeType } from '@/styles/theme';

export default function APIKeyForm() {
  const [gptState, setGptState] = useRecoilState(gptAtom);
  const { value, setValue, bind } = useInput<HTMLInputElement>(gptState.key);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() === '') {
      toast.warn('정보가 입력되지 않았어요.');
      return;
    }
    setGptState({ ...gptState, key: value });
    toast.success('API key를 등록했어요!');
  };

  const handleBlur = () => {
    setGptState({ ...gptState, key: value });
  };

  const onClickResetBtn = () => {
    setGptState({ ...gptState, key: '' });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle(theme)}>
      <label htmlFor="api-key-input">• 나의 API Key: </label>
      <input
        aria-label="api-key-input"
        placeholder="API Key"
        type="text"
        autoFocus
        onBlur={handleBlur}
        {...bind}
      />
      <div className="button-section">
        <button type="submit" aria-label="api-key-submit-btn" className="api-key-submit-btn">
          <HoverIcon icon={<CheckIcon />} />
        </button>
        <HoverIcon
          aria-label="api-key-reset-btn"
          className="api-key-reset-btn"
          icon={<DeleteIcon size={18} />}
          onClick={onClickResetBtn}
        />
      </div>
    </form>
  );
}

const formStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    white-space: nowrap;
  }

  input {
    width: 100%;
    border-bottom: 1px solid ${theme.colors.primary};
  }

  .button-section {
    flex-direction: row;
    gap: 5px;
  }

  .api-key-submit-btn {
    :hover {
      color: ${theme.colors.green};
    }
  }

  .api-key-reset-btn {
    opacity: 0.3;
    :hover {
      opacity: 0.6;
    }
  }
`;
