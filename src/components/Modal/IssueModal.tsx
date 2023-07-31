import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';

import { params } from '@/constants/params';
import { useIssue } from '@/hooks/useIssue';
import { useModal } from '@/hooks/useModal';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';

import IssueInfo from '../KanbanBoard/IssueInfo';
import RequirementSection from '../Requirement/RequirementSection';

export default function IssueModal() {
  const { getIssueById } = useIssue();
  const { closeModal } = useModal();

  const [searchParams] = useSearchParams();
  const selectedIssueId = searchParams.get(params.selectedIssueId);

  if (!selectedIssueId) {
    closeModal({ type: ModalType.ISSUE });
    return null;
  }

  const issueState: IssueStateType | undefined = getIssueById({ id: selectedIssueId });

  if (!issueState) return null;

  return (
    <div css={issueModalStyle}>
      <IssueInfo issueTitle={issueState.title} />
      <div className="requirement-section">
        <RequirementSection selectedIssueId={selectedIssueId} />
      </div>
    </div>
  );
}

const issueModalStyle = css`
  width: calc(100vw - 80px);
  height: calc(100vh - 112px);
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  .requirement-section {
    padding: 0px 20px 0 20px;
    height: calc(100% - 70px);
    overflow: auto;
  }
`;
