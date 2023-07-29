import { css } from '@emotion/react';

import APIInfoSection from '../gpt/info/APIInfoSection';
import APISetupSection from '../gpt/info/APISetupSection';
import APITestSection from '../gpt/info/APITestSection';

export default function GPTInfoModal() {
  return (
    <div css={containerStyle}>
      <section css={infoSectionStyle}>
        <APISetupSection />
        <APITestSection />
        <APIInfoSection />
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

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  button {
    width: fit-content;
    border: 1px solid black;
    padding: 2px;
    border-radius: 4px;
  }
`;

const infoSectionStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 10px 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
