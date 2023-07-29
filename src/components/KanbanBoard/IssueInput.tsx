import { css } from '@emotion/react';
import { toast } from 'react-toastify';

import useInput from '@/hooks/useInput';
import { useIssue } from '@/hooks/useIssue';
import { IssueStateType } from '@/types/issue';

import Textarea from '../common/Textarea';

export interface IssueInputProps extends React.ComponentProps<'form'> {
  issue?: IssueStateType;
  autoFocus?: boolean;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
}

export default function IssueInput({ issue, autoFocus, onBlur, onCreateIssue }: IssueInputProps) {
  const { ref, value, bind } = useInput<HTMLTextAreaElement>(issue?.title);
  const title = value.trim();

  const { updateIssue } = useIssue();

  const handleIssueUpdate = (title: string) => {
    if (issue) {
      updateIssue({ ...issue, title: value });
      return;
    }
    if (onCreateIssue) onCreateIssue(title);
  };

  const handleIssueSubmit = () => {
    if (title === '') {
      toast.warn('내용을 입력해 주세요!');
      return;
    }

    handleIssueUpdate(title);
  };

  return (
    <div css={issueInputStyle}>
      <Textarea
        ref={ref}
        placeholder="무엇을 해볼까요?"
        onBlur={onBlur}
        onUpdate={handleIssueUpdate}
        onSubmit={handleIssueSubmit}
        autoFocus={autoFocus}
        css={textareaStyle}
        {...bind}
      />
    </div>
  );
}

const issueInputStyle = css`
  width: 100%;
`;

const textareaStyle = css`
  font-weight: 700;
  background: transparent;
  :hover {
    background: #e2e1e1;
  }
  :focus {
    outline: none;
    background: white;
  }
`;
