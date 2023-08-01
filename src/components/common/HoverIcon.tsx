import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { theme, ThemeType } from '@/styles/theme';

interface HoverIconProps extends React.ComponentProps<'div'> {
  icon?: ReactNode;
}

export default function HoverIcon({ icon, ...props }: HoverIconProps) {
  return (
    <div css={hoverIconStyle(theme)} {...props}>
      {icon}
    </div>
  );
}

const hoverIconStyle = (theme: ThemeType) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100%;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  width: fit-content;
  height: fit-content;

  :hover {
    background: ${theme.colors.gray};
    transform: scale(1.1);
  }
`;
