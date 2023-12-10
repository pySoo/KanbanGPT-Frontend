import { css } from '@emotion/react';

import GPTInfoIcon from '../icons/GPTInfoIcon';
import MenuIcon from '../icons/MenuIcon';
import HoverIcon from './HoverIcon';

type HeaderProps = {
  onToggle: () => void;
};

export default function Header({ onToggle }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <HoverIcon
        aria-label="navbar-icon"
        icon={<MenuIcon width={25} height={25} />}
        onClick={onToggle}
      />
      <GPTInfoIcon aria-label="gpt-info-icon" />
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
