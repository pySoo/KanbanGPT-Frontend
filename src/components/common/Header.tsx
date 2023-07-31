import { css } from '@emotion/react';

import GPTInfoIcon from '../icons/GPTInfoIcon';
import MenuIcon from '../icons/MenuIcon';
import HoverIcon from './HoverIcon';

type HeaderProps = {
  onToggleNav: () => void;
};

export default function Header({ onToggleNav }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <HoverIcon icon={<MenuIcon width={25} height={25} />} onClick={onToggleNav} />
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
