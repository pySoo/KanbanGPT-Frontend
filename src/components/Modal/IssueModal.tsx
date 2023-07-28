import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { params } from '@/constants/params';
import { useIssue } from '@/hooks/useIssue';
import { useModal } from '@/hooks/useModal';
import { useRequirement } from '@/hooks/useRequirement';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';
import { RequirementStateType } from '@/types/requirement';

import GPTPrompt from '../gpt/GptPrompt';
import RequirementList from '../Requirement/RequirementList';

export default function IssueModal() {
  const [selectedRequireId, setSelectedRequireId] = useState<string | undefined>(undefined);
  const [selectedRequire, setSelectedRequire] = useState<RequirementStateType | undefined>(
    undefined,
  );

  const { getIssueById } = useIssue();
  const { getRequireByIssueId } = useRequirement();
  const { closeModal } = useModal();

  const [searchParams] = useSearchParams();
  const selectedIssueId = searchParams.get(params.selectedIssueId);

  if (!selectedIssueId) {
    closeModal({ type: ModalType.ISSUE });
    return null;
  }

  const issueState: IssueStateType | undefined = getIssueById({ id: selectedIssueId });

  if (!issueState) return null;
  const requirementList = getRequireByIssueId({ issueId: selectedIssueId });

  const handleSelectId = (id?: string) => {
    setSelectedRequireId(id);
  };

  useEffect(() => {
    const filteredRequire = requirementList?.filter((value) => value.id === selectedRequireId)[0];
    setSelectedRequire(filteredRequire);
  }, [selectedRequireId]);

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>{issueState?.title}</h2>
      <section css={issueSectionStyle}>
        <RequirementList
          issueId={selectedIssueId}
          requirements={requirementList}
          onSelectId={handleSelectId}
        />
        <GPTPrompt requirement={selectedRequire} />
      </section>
    </div>
  );
}

const containerStyle = css`
  height: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

const titleStyle = css`
  font-size: 1.2rem;
  font-weight: 700;
`;

const issueSectionStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 0;
`;
