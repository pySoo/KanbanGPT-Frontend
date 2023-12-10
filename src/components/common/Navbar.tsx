import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { navConfig } from '@/constants/navbar';
import { theme, ThemeType } from '@/styles/theme';
import { bodyScroll } from '@/utils/scroll';

import Label from './Label';

type NavbarProps = {
  isNavOpen: boolean;
  onToggle: () => void;
};

export default function Navbar({ isNavOpen, onToggle }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveNav = (path: string) => {
    if (location.pathname === path) return true;
    return false;
  };

  const handleCloseNav = () => {
    onToggle();
  };

  const handleNavigateToPath = (path: string) => {
    navigate(path);
    handleCloseNav();
  };

  useEffect(() => {
    if (isNavOpen) {
      bodyScroll.disable();
    } else {
      bodyScroll.enable();
    }
  }, [isNavOpen]);

  return (
    <aside css={navBarStyle(isNavOpen)}>
      <div className="nav-overlay" onClick={handleCloseNav} />
      <nav css={navStyle(isNavOpen, theme)}>
        <ul className="nav-list">
          <Label className="nav-title">Kanban GPT</Label>
          {navConfig.map(({ icon, label, path }) => (
            <li
              key={label}
              css={navItemStyle(isActiveNav(path), theme)}
              onClick={() => handleNavigateToPath(path)}
            >
              <div>{icon}</div>
              <span className="nav-item-title">{label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

const navBarStyle = (isNavOpen: boolean) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: env(safe-area-inset-left);
  z-index: 10;
  pointer-events: ${isNavOpen ? 'auto' : 'none'};

  .nav-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${isNavOpen ? 1 : 0};
    background: #00000090;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    pointer-events: ${isNavOpen ? 'auto' : 'none'};
  }
`;

const navStyle = (isNavOpen: boolean, theme: ThemeType) => css`
  width: fit-content;
  height: 100%;
  position: fixed;
  top: 0px;
  left: env(safe-area-inset-left);
  transform: ${isNavOpen ? '0' : 'translatex(-100%)'};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  z-index: 10;

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 0;
  }

  .nav-title {
    margin: auto;
    margin-bottom: 10px;
    padding: 4px 10px;
  }
`;

const navItemStyle = (isActiveNav: boolean, theme: ThemeType) => css`
  width: 200px;
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 20px;
  gap: 15px;
  border-radius: 12px;
  background: ${isActiveNav ? theme.colors.secondary : theme.colors.gray};
  color: ${isActiveNav ? theme.colors.primary : theme.colors.darkGray};
  margin: 0 16px;

  .nav-item-title {
    font-weight: ${isActiveNav ? 600 : 400};
  }

  :hover {
    color: ${theme.colors.primary};
  }
`;
