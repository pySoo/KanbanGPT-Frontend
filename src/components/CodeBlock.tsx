import { css } from '@emotion/react';
import { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { gptCode } from '@/data/gpt';

import CopyIcon from './icons/CopyIcon';

export default function CodeBlock() {
  const codeBlockRef = useRef<HTMLDivElement | null>(null);
  const language = 'typescript';

  return (
    <div ref={codeBlockRef} css={codeBlockStyle}>
      <button css={copyButtonStyle}>
        <CopyIcon />
      </button>
      <SyntaxHighlighter customStyle={customStyle} language={language} style={darcula}>
        {gptCode}
      </SyntaxHighlighter>
    </div>
  );
}

const codeBlockStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const customStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
};

const copyButtonStyle = css`
  position: absolute;
  right: 0;
  color: white;
  padding: 20px;
  transition: all 0.2s ease-in-out;
`;
