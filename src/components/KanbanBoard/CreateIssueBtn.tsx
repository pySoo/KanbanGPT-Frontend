import { css } from '@emotion/react';

import PlusIcon from '../icons/PlusIcon';

export default function CreateIssueBtn({ ...props }: React.ComponentProps<'button'>) {
  return (
    <button css={createIssueBtnStyle} {...props}>
      <PlusIcon />
      <span>이슈 추가</span>
    </button>
  );
}

const createIssueBtnStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
