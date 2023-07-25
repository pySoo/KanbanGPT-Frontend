import { css } from '@emotion/react';
import { FormEvent } from 'react';

import useInput from '@/hooks/useInput';
import { useIssue } from '@/hooks/useIssue';
import { IssueStateType } from '@/types/issue';

export interface IssueMemoProps extends React.ComponentProps<'form'> {
  issue?: IssueStateType;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
}

export default function IssueInput({ issue, onBlur, onCreateIssue, ...props }: IssueMemoProps) {
  const { value, bind } = useInput(issue?.title);

  const { updateIssue } = useIssue();

  const handleIssueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value?.trim() !== '') {
      if (onCreateIssue) {
        onCreateIssue(value);
      } else {
        if (issue) updateIssue({ ...issue, title: value });
      }
    }
  };

  const handleIssueBlur = () => {
    if (value?.trim() === '') {
      if (onBlur) onBlur();
    }
  };

  return (
    <form onSubmit={handleIssueSubmit} {...props}>
      <input
        aria-label="issue-title-input"
        id="issue-title-input"
        type="text"
        placeholder="무엇을 해볼까요?"
        onBlur={handleIssueBlur}
        css={issueInputStyle}
        {...bind}
      />
    </form>
  );
}

const issueInputStyle = css`
  width: 100%;
  font-weight: 700;
  background: transparent;
  padding: 4px 2px;
  :hover {
    background: white;
  }
  :focus {
    outline: none;
  }
`;
