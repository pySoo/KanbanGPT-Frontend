import { css } from '@emotion/react';

export const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    word-break: keep-all;
  }
  body {
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    background: none;
    cursor: pointer;
  }
  input,
  textarea {
    outline: none;
  }
`;
