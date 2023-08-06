import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { path } from '@/routes/path';

export default function NotFound() {
  const navigate = useNavigate();

  const handleNavigateToMain = () => {
    navigate(path.root);
  };

  return (
    <div css={notFoundStyle}>
      <h2>존재하지 않는 페이지입니다.</h2>
      <button onClick={handleNavigateToMain}>KanbanGPT로 돌아가기</button>
    </div>
  );
}

const notFoundStyle = css`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
