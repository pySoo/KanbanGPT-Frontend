import { css } from '@emotion/react';

import MenuIcon from './icons/MenuIcon';
import Profile from './Profile';

type HeaderProps = {
  onToggleNav: () => void;
};

export default function Header({ onToggleNav }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <MenuIcon onClick={onToggleNav} />
      <Profile />
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
