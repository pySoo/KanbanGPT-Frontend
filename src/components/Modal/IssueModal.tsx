import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';

import { params } from '@/constants/params';
import { useIssue } from '@/hooks/useIssue';
import { useModal } from '@/hooks/useModal';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';

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
      <h2 className="issue-modal-title">{issueState?.title}</h2>
      <RequirementSection selectedIssueId={selectedIssueId} />
    </div>
  );
}

const issueModalStyle = css`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
  padding-top: 20px;
  border-radius: 4px;
  overflow: hidden;

  .issue-modal-title {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
