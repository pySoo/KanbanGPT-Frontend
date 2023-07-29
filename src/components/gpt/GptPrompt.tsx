import { css } from '@emotion/react';

import useConnectGpt from '@/hooks/useConnectGpt';
import { RequirementStateType } from '@/types/requirement';

import ConnectedPrompt from './ConnectedPrompt';
import DisconnectedPrompt from './DisconnectedPrompt';

type GPTPromptProps = {
  requirement?: RequirementStateType;
};

export default function GPTPrompt({ requirement }: GPTPromptProps) {
  const { isConnected } = useConnectGpt();

  return (
    <div css={gptPromptStyle}>
      {isConnected ? (
        <ConnectedPrompt requirement={requirement} />
      ) : (
        <DisconnectedPrompt requirement={requirement} />
      )}
    </div>
  );
}

const gptPromptStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  flex-shrink: 0;
`;
