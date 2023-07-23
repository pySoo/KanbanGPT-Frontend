import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { navConfig } from '@/constants/navbar';
import { theme, ThemeType } from '@/styles/theme';

import LogoutIcon from '../icons/LogoutIcon';

type NavbarProps = {
  isNavOpen: boolean;
};

export default function Navbar({ isNavOpen }: NavbarProps) {
  const isLoggedIn = false;
  return (
    <nav css={navStyle(isNavOpen, theme)}>
      <ul css={navListStyle}>
        {navConfig.map(({ icon, label, path }) => (
          <Link key={label} to={path} css={{ textDecoration: 'none' }}>
            <li css={navItemStyle}>
              <div>{icon}</div>
              <span>{label}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div css={navFooterStyle}>
        {isLoggedIn && (
          <>
            <LogoutIcon />
            <span>로그아웃</span>
          </>
        )}
      </div>
    </nav>
  );
}

const navStyle = (isNavOpen: boolean, theme: ThemeType) => css`
  width: fit-content;
  height: calc(100vh - 56px);
  position: fixed;
  left: ${isNavOpen ? '0' : '-100%'};
  transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.white};
`;

const navListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const navItemStyle = css`
  display: flex;
  align-items: center;
  gap: 15px;
  color: 'black';
`;

const navFooterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
