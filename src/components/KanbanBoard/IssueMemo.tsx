import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { useModal } from '@/hooks/useModal';
import { theme, ThemeType } from '@/styles/theme';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';

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

  const handleOpenIssueModal = () => {
    navigate(`/`, { state: issue });
    openModal({ type: ModalType.ISSUE });
  };

  const handleMemoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.id === 'issue-title-input') return;
    if (target.id === 'gpt-icon') return;
    if (!issue) return;

    handleOpenIssueModal();
  };

  return (
    <div css={issueMemoStyle(theme)} {...props} onClick={handleMemoClick}>
      <IssueInput issue={issue} onBlur={onBlur} onCreateIssue={onCreateIssue} />
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
