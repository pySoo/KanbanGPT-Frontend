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
    min-height: 100vh;
    min-height: -webkit-fill-available;

    padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
      constant(safe-area-inset-bottom) constant(safe-area-inset-left);

    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
      env(safe-area-inset-left);
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
