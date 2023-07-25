import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { useIssue } from '@/hooks/useIssue';
import { useModal } from '@/hooks/useModal';
import { theme, ThemeType } from '@/styles/theme';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';

import DeleteIcon from '../icons/DeleteIcon';
import GPTIcon from '../icons/GPTIcon';
import IssueInput from './IssueInput';

export interface IssueMemoProps extends React.ComponentProps<'div'> {
  issue?: IssueStateType;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
}

export default function IssueMemo({ issue, onBlur, onCreateIssue, ...props }: IssueMemoProps) {
  const navigate = useNavigate();

  const { openModal } = useModal();
  const { deleteIssue } = useIssue();

  const handleOpenIssueModal = () => {
    navigate(`/`, { state: issue });
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
    if (issue) deleteIssue({ id: issue.id });
  };

  return (
    <div css={issueMemoStyle(theme)} {...props} onClick={handleMemoClick}>
      <div css={issueTitleStyle}>
        <IssueInput issue={issue} onBlur={onBlur} onCreateIssue={onCreateIssue} />
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

const gptIconStyle = css`
  margin-left: auto;
`;

const issueMemoStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 50px;
  padding: 10px;
  background-color: ${theme.colors.yellow};
  cursor: pointer;
`;

const issueTitleStyle = css`
  display: flex;
  align-items: center;
`;

const deleteBtnStyle = css`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;
