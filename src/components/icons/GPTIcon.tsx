import { css } from '@emotion/react';

export default function GPTIcon({ ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      src="/images/gpt_logo.png"
      alt="gpt_logo"
      aria-label="gpt-icon"
      {...props}
      css={gptIconStyle}
    />
  );
}

const gptIconStyle = css`
  opacity: 0.7;
`;
