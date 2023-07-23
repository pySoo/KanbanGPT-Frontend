import { css } from '@emotion/react';

export default function GPTIcon({ ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      src="/images/gpt_logo.png"
      alt="gpt_logo"
      aria-label="gpt-icon"
      css={gptIconStyle}
      {...props}
    />
  );
}

const gptIconStyle = css`
  width: 30px;
  height: 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
