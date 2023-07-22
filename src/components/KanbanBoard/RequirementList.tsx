import { css } from '@emotion/react';

import RequirementItem from '../RequirementItem';

export default function RequirementList() {
  return (
    <ul css={requirementListStyle}>
      <RequirementItem />
    </ul>
  );
}

const requirementListStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;
