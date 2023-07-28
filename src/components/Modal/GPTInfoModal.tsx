import { css } from '@emotion/react';
import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';

import { gptAtom } from '@/atoms/gptAtom';
import useInput from '@/hooks/useInput';

export default function GPTInfoModal() {
  const [gptState, setGptState] = useRecoilState(gptAtom);
  const { value, bind } = useInput(gptState.key);

  const handleOpenApiKeys = () => {
    window.open('https://platform.openai.com/account/api-keys');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGptState({ ...gptState, key: value });
  };

  const handleBlur = () => {
    setGptState({ ...gptState, key: value });
  };

  return (
    <div css={containerStyle}>
      <div css={{ display: 'flex' }}>
        <h2 css={titleStyle}>GPT API 연동하기</h2>
      </div>
      <section css={infoSectionStyle}>
        <p>API Key를 등록하면 요구사항에 대한 코드를 바로 받아볼 수 있어요.</p>
        <button type="button" onClick={handleOpenApiKeys}>
          API Key 발급받기
        </button>
        <form onSubmit={handleSubmit}>
          <label>나의 API Key: </label>
          <input
            placeholder="API key 입력하기"
            type="text"
            autoFocus
            onBlur={handleBlur}
            {...bind}
          />
          <button type="submit">등록</button>
        </form>
        <div>
          <p css={titleStyle}>API 연동 테스트</p>
          <div css={{ display: 'flex' }}>
            <button>API 요청하기</button>
            <span>성공</span>
            <span>실패</span>
          </div>
          <span>(요청당 약 $0.0001가 청구됩니다.)</span>
        </div>
        <div>
          <p css={titleStyle}>API 요청이 되지 않는다면?</p>
          <span>1. 무료 크레딧이 소진 되었어요.</span>
          <span>2. 결제 수단이 등록되지 않았어요.</span>
          <button>확인해보기</button>
        </div>
      </section>
    </div>
  );
}

const containerStyle = css`
  height: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

const titleStyle = css`
  font-size: 1.2rem;
  font-weight: 700;
`;

const infoSectionStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
`;
