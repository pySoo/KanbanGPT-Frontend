import { css } from '@emotion/react';

export default function GPTIcon({ ...props }: React.ComponentProps<'img'>) {
  return <img {...props} css={gptIconStyle} src="/images/gpt_logo.png" alt="gpt_logo" />;
}

const gptIconStyle = css`
  width: 30px;
  height: 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.15);
  }
`;
