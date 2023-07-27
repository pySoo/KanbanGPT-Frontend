import { css } from '@emotion/react';
import { useEffect } from 'react';

import { useIssue } from '@/hooks/useIssue';
import useTextarea from '@/hooks/useTextarea';
import { IssueStateType } from '@/types/issue';

export interface IssueMemoProps extends React.ComponentProps<'form'> {
  issue?: IssueStateType;
  autoFocus?: boolean;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
}

export default function IssueTextarea({ issue, autoFocus, onBlur, onCreateIssue }: IssueMemoProps) {
  const { ref, value, bind } = useTextarea(issue?.title);

  const { updateIssue } = useIssue();

  const updateIssueTitle = (title: string) => {
    if (issue) {
      updateIssue({ ...issue, title: value });
      return;
    } else {
      if (onCreateIssue) onCreateIssue(title);
    }
  };

  const removeTextareaFocus = () => {
    if (ref.current) {
      ref?.current?.blur();
      document.body.focus();
    }
  };

  const handleIssueSubmit = () => {
    const title = value.trim();
    if (title !== '') {
      updateIssueTitle(title);
    } else {
      alert('제목을 입력해주세요');
    }

    removeTextareaFocus();
  };

  const handleIssueBlur = () => {
    const title = value.trim();
    if (title !== '') {
      updateIssueTitle(title);
    }
    if (onBlur) onBlur();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        event.preventDefault();
        handleIssueSubmit();
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      const textarea = ref.current;
      if (value) {
        textarea.style.height = 'inherit';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }
  }, [value]);

  return (
    <div css={issueTextareaStyle}>
      <textarea
        aria-label="issue-title-textarea"
        id="issue-title-textarea"
        placeholder="무엇을 해볼까요?"
        onBlur={handleIssueBlur}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
        css={textareaStyle}
        {...bind}
      />
    </div>
  );
}

const issueTextareaStyle = css`
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
