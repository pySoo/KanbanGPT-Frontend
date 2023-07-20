import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import GPTIcon from './icons/GPTIcon';

export interface IssueMemoProps extends React.ComponentProps<'div'> {
  title: string;
}

export default function IssueMemo({ title, ...props }: IssueMemoProps) {
  return (
    <div css={issueMemoStyle(theme)} {...props}>
      <p css={titleStyle}>{title}</p>
      <GPTIcon css={gptIconStyle} />
    </div>
  );
}
const titleStyle = css`
  font-weight: 700;
  :hover {
    opacity: 0.6;
  }
`;

const gptIconStyle = css`
  margin-left: auto;
`;

const issueMemoStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 50px;
  padding: 10px;
  background-color: ${theme.colors.yellow};
  cursor: pointer;
`;
