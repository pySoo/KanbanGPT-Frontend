import { css } from '@emotion/react';

import useConnectGpt from '@/hooks/useConnectGpt';
import { RequirementStateType } from '@/types/requirement';

import ConnectedPrompt from './ConnectedPrompt';
import DisconnectedPrompt from './DisconnectedPrompt';

type GPTPromptProps = {
  requirement?: RequirementStateType;
};

export default function GPTPrompt({ requirement }: GPTPromptProps) {
  const { apiKey } = useConnectGpt();

  return (
    <div css={gptPromptStyle}>
      {apiKey ? (
        <ConnectedPrompt requirement={requirement} />
      ) : (
        <DisconnectedPrompt requirement={requirement} />
      )}
    </div>
  );
}

const gptPromptStyle = css`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: auto;
  padding: 0 20px;
  padding-bottom: 20px;
`;
