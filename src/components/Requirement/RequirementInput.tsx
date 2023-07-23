import { css } from '@emotion/react';
import { ChangeEvent, FormEvent, useState } from 'react';

import EmptyCircleIcon from '../icons/EmptyCircleIcon';

export default function RequirementInput() {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div css={requirementInputStyle}>
      <EmptyCircleIcon />
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="요구사항을 입력해주세요!"
          value={text}
          onChange={handleInputChange}
          css={inputStyle}
        />
      </form>
    </div>
  );
}

const requirementInputStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const inputStyle = css`
  border: 1px solid black;
  padding: 2px 5px;
`;
