import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { gptCode } from '@/data/gpt';

import CheckIcon from './icons/CheckIcon';
import CopyIcon from './icons/CopyIcon';

export default function CodeBlock() {
  const [isCopied, setIsCopied] = useState(false);
  const codeBlockRef = useRef<HTMLDivElement | null>(null);
  const language = 'typescript';

  const handleCodeCopy = async () => {
    try {
      await navigator.clipboard.writeText(gptCode);
      setIsCopied(true);
      alert('링크를 복사했습니다.');
    } catch (e) {
      console.error(e);
      alert('링크 복사에 실패했습니다.');
    }
  };

  return (
    <div ref={codeBlockRef} css={codeBlockStyle}>
      <button css={copyButtonStyle(isCopied)} onClick={handleCodeCopy}>
        {isCopied ? <CheckIcon /> : <CopyIcon />}
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

const copyButtonStyle = (isCopied: boolean) => css`
  position: absolute;
  right: 0;
  color: white;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  scale: ${isCopied ? '1.6' : '1'};
  :hover {
    transform: ${isCopied ? 'scale(1)' : 'scale(1.2)'};
  }
`;
