import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { toast } from 'react-toastify';

import useTimer from '@/hooks/useTimer';

import CheckIcon from '../icons/CheckIcon';
import CopyIcon from '../icons/CopyIcon';

type CodeBlockProps = {
  code: string;
};

export default function CodeBlock({ code }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const codeBlockRef = useRef<HTMLDivElement | null>(null);
  const language = 'typescript';

  useTimer(isCopied, 1500, () => {
    setIsCopied(false);
  });

  const handleCodeCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    } catch (e) {
      toast.error('링크 복사에 실패했습니다.');
    }
  };

  return (
    <div ref={codeBlockRef} css={codeBlockStyle}>
      <button css={copyButtonStyle(isCopied)} onClick={handleCodeCopy}>
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <SyntaxHighlighter customStyle={customStyle} language={language} style={darcula}>
        {code}
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
