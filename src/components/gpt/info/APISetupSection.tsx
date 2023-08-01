import { css } from '@emotion/react';

import RoundedBtn from '@/components/common/RoundedBtn';

import APIKeyForm from './APIKeyForm';

export default function APISetupSection() {
  const handleOpenApiPage = () => {
    window.open('https://platform.openai.com/account/api-keys');
  };

  return (
    <div css={apiSetupSectionStyle}>
      <div className="setup-section">
        <h2>GPT API 연동</h2>
        <RoundedBtn onClick={handleOpenApiPage}>API Key 발급 받기</RoundedBtn>
      </div>
      <span>• API Key를 등록하면 요구사항을 구현한 코드를 바로 받아볼 수 있어요.</span>
      <APIKeyForm />
    </div>
  );
}

const apiSetupSectionStyle = css`
  .setup-section {
    flex-direction: row;
    align-items: center;
  }
`;
