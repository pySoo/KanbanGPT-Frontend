import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { params } from '@/constants/params';
import { useModal } from '@/hooks/useModal';
import { useRequirement } from '@/hooks/useRequirement';
import { theme, ThemeType } from '@/styles/theme';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';

import GPTIcon from '../icons/GPTIcon';
import IssuePreviewList from './IssuePreviewList';
import IssueTitle from './IssueTitle';

export interface IssueMemoProps extends React.ComponentProps<'div'> {
  issue?: IssueStateType;
  autoFocus?: boolean;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
}

export default function IssueMemo({
  issue,
  autoFocus,
  onBlur,
  onCreateIssue,
  ...props
}: IssueMemoProps) {
  const navigate = useNavigate();

  const { openModal } = useModal();
  const { getRequireByIssueId } = useRequirement();

  const requirementList = getRequireByIssueId({ issueId: issue?.id });

  const handleOpenIssueModal = () => {
    navigate(`/?${params.selectedIssueId}=${issue?.id}`);
    openModal({ type: ModalType.ISSUE });
  };

  const handleMemoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (!issue) return;

    if (['DIV', 'LI', 'P'].includes(target.nodeName)) {
      handleOpenIssueModal();
    }
  };

  return (
    <div id="issue-memo" css={issueMemoStyle(theme)} {...props} onClick={handleMemoClick}>
      <IssueTitle
        issue={issue}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onCreateIssue={onCreateIssue}
      />
      {requirementList && requirementList.length > 0 && (
        <IssuePreviewList requirements={requirementList} />
      )}
      <GPTIcon className="gpt-icon" width={30} height={30} />
    </div>
  );
}

const issueMemoStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 88px;
  padding: 10px;
  background-color: ${theme.colors.background};
  cursor: pointer;
  margin-top: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;

  .gpt-icon {
    margin-left: auto;
  }
`;
