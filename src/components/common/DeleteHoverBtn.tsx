import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import DeleteIcon from '../icons/DeleteIcon';
import HoverIcon from './HoverIcon';

export default function DeleteHoverBtn({ ...props }: React.ComponentProps<'button'>) {
  return (
    <button css={deleteHoverBtnStyle(theme)} {...props}>
      <HoverIcon icon={<DeleteIcon />} />
    </button>
  );
}
const deleteHoverBtnStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  padding-left: 5px;
  opacity: 0;
  color: ${theme.colors.red};

  :hover {
    opacity: 1;
  }
`;
