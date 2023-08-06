import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import DeleteIcon from '../icons/DeleteIcon';
import HoverIcon from './HoverIcon';

interface DeleteHoverBtnProps extends React.ComponentProps<'button'> {
  iconSize?: number;
}

export default function DeleteHoverBtn({ iconSize, ...props }: DeleteHoverBtnProps) {
  return (
    <button aria-label="delete-btn" css={deleteHoverBtnStyle(theme)} {...props}>
      <HoverIcon icon={<DeleteIcon size={iconSize} />} />
    </button>
  );
}
const deleteHoverBtnStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  opacity: 0.2;
  color: ${theme.colors.red};

  :hover {
    opacity: 0.6;
  }
`;
