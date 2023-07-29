import { css } from '@emotion/react';

import GPTInfoIcon from '../icons/GPTInfoIcon';
import MenuIcon from '../icons/MenuIcon';

type HeaderProps = {
  onToggleNav: () => void;
};

export default function Header({ onToggleNav }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <MenuIcon onClick={onToggleNav} />
      <GPTInfoIcon />
    </header>
  );
}

const headerStyle = css`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
