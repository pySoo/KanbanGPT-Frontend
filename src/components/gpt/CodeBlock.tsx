import { css } from '@emotion/react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRecoilValue } from 'recoil';

import { devEnvironmentAtom } from '@/atoms/devEnvironmentAtom';
import useTimer from '@/hooks/useTimer';
import { theme, ThemeType } from '@/styles/theme';
import { copyText } from '@/utils/gpt';

import CheckIcon from '../icons/CheckIcon';
import CopyIcon from '../icons/CopyIcon';

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const devState = useRecoilValue(devEnvironmentAtom);
  const currentLanguage = language ?? devState.language ?? 'typescript';

  useTimer(isCopied, 1500, () => {
    setIsCopied(false);
  });

  const handleCodeCopy = async () => {
    copyText({ text: code, toastMessage: '코드를 복사했어요!' });
  };

  return (
    <div css={codeBlockStyle(isCopied, theme)}>
      <button className="copy-btn" onClick={handleCodeCopy}>
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <SyntaxHighlighter customStyle={customStyle} language={currentLanguage} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

const codeBlockStyle = (isCopied: boolean, theme: ThemeType) => css`
  position: relative;
  width: 100%;
  height: 100%;

  .copy-btn {
    width: 34px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    padding: 7px;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    scale: ${isCopied ? '1.2' : '1'};
    background: ${theme.colors.midGray};
    :hover {
      transform: ${isCopied ? 'scale(1)' : 'scale(1.1)'};
    }
  }
`;

const customStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
};
