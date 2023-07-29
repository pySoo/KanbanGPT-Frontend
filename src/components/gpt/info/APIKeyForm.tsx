import { css } from '@emotion/react';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { gptAtom } from '@/atoms/gptAtom';
import useInput from '@/hooks/useInput';

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
    <form onSubmit={handleSubmit} css={formStyle}>
      <label>나의 API Key: </label>
      <input placeholder="API key 등록하기" type="text" onBlur={handleBlur} {...bind} />
      <div className="button-section">
        <button type="submit">등록</button>
        <button type="reset" onClick={onClickResetBtn}>
          삭제
        </button>
      </div>
    </form>
  );
}

const formStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 380px;
    border-bottom: 1px solid black;
  }

  .button-section {
    flex-direction: row;
    gap: 5px;
  }
`;
