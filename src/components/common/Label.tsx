import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export interface LabelProps extends React.ComponentProps<'div'> {
  bgColor?: string;
  fontColor?: string;
}

export default function Label({ bgColor, ...props }: LabelProps) {
  return <div {...props} css={labelStyle({ bgColor })} />;
}

const labelStyle = ({ bgColor, fontColor }: LabelProps) => css`
  width: fit-content;
  border-radius: 12px;
  padding: 3px 10px;
  background-color: ${bgColor ? bgColor : theme.colors.primary};
  color: ${fontColor ? fontColor : theme.colors.white};
`;
