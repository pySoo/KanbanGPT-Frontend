import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import APIInfoSection from '../gpt/info/APIInfoSection';
import APISetupSection from '../gpt/info/APISetupSection';
import APITestSection from '../gpt/info/APITestSection';

export default function GPTInfoModal() {
  return (
    <div css={containerStyle(theme)}>
      <section css={infoSectionStyle}>
        <APISetupSection />
        <APITestSection />
        <APIInfoSection />
      </section>
    </div>
  );
}

const containerStyle = (theme: ThemeType) => css`
  width: fit-content;
  display: flex;
  background: ${theme.colors.white};
  padding: 24px 30px;
  overflow: hidden;
  border-radius: 10px;
  color: ${theme.colors.text};

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${theme.colors.beige};
  }
`;

const infoSectionStyle = css`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 10px 0;
  margin: auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
