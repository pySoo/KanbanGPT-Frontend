import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import APIInfoSection from '../gpt/info/APIInfoSection';
import APISetupSection from '../gpt/info/APISetupSection';
import APITestSection from '../gpt/info/APITestSection';

export default function GPTInfoModal() {
  return (
    <div css={containerStyle(theme)}>
      <section className="gpt-info-section">
        <APISetupSection />
        <APITestSection />
        <APIInfoSection />
      </section>
    </div>
  );
}

const containerStyle = (theme: ThemeType) => css`
  width: calc(100vw - 80px);
  max-width: 625px;
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

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .gpt-info-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 10px 0;
    margin: auto;
  }

  .gpt-info-title {
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${theme.screens.sm}px) {
    width: calc(100vw - 40px);
    padding: 24px 18px;

    .gpt-info-section {
      gap: 25px;
    }

    .gpt-info-title {
      flex-direction: column;
    }

    div {
      gap: 2px;
      padding-bottom: 8px;
    }
  }
`;
