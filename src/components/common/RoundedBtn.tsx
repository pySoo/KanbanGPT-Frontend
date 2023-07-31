import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

export default function RoundedBtn({ children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button {...props} css={roundedBtnStyle(theme, props.color)}>
      {children}
    </button>
  );
}

const roundedBtnStyle = (theme: ThemeType, color?: string) => css`
  color: ${color ?? theme.colors.green};
  border: 1px solid ${color ?? theme.colors.green};
  border-radius: 8px;
  padding: 3px 5px;
  font-weight: 500;
  box-shadow: ${theme.colors.gray} 0px 2px 4px 0px;
  :hover {
    opacity: 0.7;
  }
`;
