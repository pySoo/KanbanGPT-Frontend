import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { params } from '@/constants/params';
import { useIssue } from '@/hooks/useIssue';
import { useModal } from '@/hooks/useModal';
import { theme, ThemeType } from '@/styles/theme';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';

import DeleteIcon from '../icons/DeleteIcon';
import GPTIcon from '../icons/GPTIcon';
import IssueTextarea from './IssueTextarea';

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
  const { deleteIssue } = useIssue();

  const handleOpenIssueModal = () => {
    navigate(`/?${params.selectedIssueId}=${issue?.id}`);
    openModal({ type: ModalType.ISSUE });
  };

  const handleMemoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!issue) return;
    if (target.nodeName === 'DIV') {
      handleOpenIssueModal();
    }
  };

  const handleIssueDelete = () => {
    if (issue) deleteIssue({ id: issue.id, status: issue.status });
  };

  return (
    <div css={issueMemoStyle(theme)} {...props} onClick={handleMemoClick}>
      <div css={issueTitleStyle}>
        <IssueTextarea
          issue={issue}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onCreateIssue={onCreateIssue}
        />
        {issue && (
          <button css={deleteBtnStyle} onClick={handleIssueDelete}>
            <DeleteIcon />
          </button>
        )}
      </div>
      <GPTIcon id="gpt-icon" css={gptIconStyle} />
    </div>
  );
}

const issueMemoStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 50px;
  padding: 10px;
  background-color: ${theme.colors.yellow};
  cursor: pointer;
  margin-top: 10px;
`;

const issueTitleStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const deleteBtnStyle = css`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const gptIconStyle = css`
  margin-left: auto;
`;
