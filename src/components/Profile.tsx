import { css } from '@emotion/react';

import ProfileIcon from './icons/ProfileIcon';

export default function Profile() {
  const isLoggedIn = false;
  return (
    <div css={profileStyle}>
      <ProfileIcon />
      <span css={statusStyle}>{isLoggedIn ? '반갑습니다!' : '로그인'}</span>
    </div>
  );
}

const profileStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const statusStyle = css`
  padding-top: 5px;
`;
