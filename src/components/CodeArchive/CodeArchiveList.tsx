import { css } from '@emotion/react';

import { useRequirement } from '@/hooks/useRequirement';

import CodeArchiveInfo from './CodeArchiveInfo';
import CodeArchiveItem from './CodeArchiveItem';

export default function CodeArchiveList() {
  const { requireList } = useRequirement();
  const requirementsWithCode = requireList.filter((requirement) => requirement.gpt);
  return (
    <ul css={codeArchiveListStyle}>
      {requirementsWithCode.length > 0 ? (
        requirementsWithCode.map((requirement) => (
          <CodeArchiveItem key={requirement.id} requirement={requirement} />
        ))
      ) : (
        <CodeArchiveInfo />
      )}
    </ul>
  );
}

const codeArchiveListStyle = css`
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-top: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
