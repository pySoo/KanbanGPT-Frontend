import { css } from '@emotion/react';
import { FormEvent } from 'react';

import useInput from '@/hooks/useInput';
import { IssueStateType } from '@/types/issue';

export interface IssueMemoProps extends React.ComponentProps<'form'> {
  issue?: IssueStateType;
  onBlur?: () => void;
  onSubmit?: () => void;
}

export default function IssueInput({ issue, onBlur, onSubmit, ...props }: IssueMemoProps) {
  const { value, bind } = useInput(issue?.title);

  const handleIssueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit && value?.trim() !== '') {
      onSubmit();
    }
  };

  const handleIssueBlur = () => {
    if (value?.trim() === '' && onBlur) {
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
        onBlur={handleIssueBlur}
        autoFocus
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
