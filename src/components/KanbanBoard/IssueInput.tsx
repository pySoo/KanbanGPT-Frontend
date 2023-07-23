import { css } from '@emotion/react';
import { ChangeEvent, FormEvent, useState } from 'react';

import { IssueStateType } from '@/types/issue';

export interface IssueMemoProps extends React.ComponentProps<'form'> {
  issue?: IssueStateType;
  onBlur?: () => void;
  onSubmit?: () => void;
}

export default function IssueInput({ issue, onBlur, onSubmit, ...props }: IssueMemoProps) {
  const [issueTitle, setIssueTitle] = useState(issue?.title ?? '');

  const handleIssueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueTitle(e.target.value);
  };

  const handleIssueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit && issueTitle?.trim() !== '') {
      onSubmit();
    }
  };

  const handleIssueBlur = () => {
    if (issueTitle?.trim() === '' && onBlur) {
      onBlur();
    }
  };

  return (
    <form onSubmit={handleIssueSubmit} {...props}>
      <input
        aria-label="issue-title-input"
        id="issue-title-input"
        type="text"
        placeholder="무엇을 해볼까요?"
        value={issueTitle}
        onChange={handleIssueChanged}
        onBlur={handleIssueBlur}
        autoFocus
        css={issueInputStyle}
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
