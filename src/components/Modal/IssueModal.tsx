import { css } from '@emotion/react';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ModalDispatchContext } from '@/contexts/Modal/ModalContext';
import { IssueStateType } from '@/types/issue';
import { ModalType } from '@/types/modal';
import { bodyScroll } from '@/utils/scroll';

import GPTPrompt from '../gpt/GptPrompt';
import RequirementList from '../Requirement/RequirementList';

export default function IssueModal() {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [prompt, setPrompt] = useState<string | undefined>(undefined);

  const location = useLocation();
  const issueState: IssueStateType = location.state;
  const { title, requirements } = issueState;

  const { closeModal } = useContext(ModalDispatchContext);

  if (!issueState) {
    closeModal({ type: ModalType.ISSUE });
    return;
  }

  const handleSelectId = (id: string) => {
    setSelectedId(id);
  };

  useEffect(() => {
    bodyScroll.disable();
    return () => {
      bodyScroll.enable();
    };
  }, []);

  useEffect(() => {
    const filteredPrompt = requirements?.filter((value) => value.id === selectedId)[0]?.gpt;
    setPrompt(filteredPrompt);
  }, [selectedId]);

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>{title}</h2>
      <section css={issueSectionStyle}>
        <RequirementList requirements={requirements} onSelectId={handleSelectId} />
        <GPTPrompt prompt={prompt} />
      </section>
    </div>
  );
}

const containerStyle = css`
  height: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

const titleStyle = css`
  font-size: 1.2rem;
  font-weight: 700;
`;

const issueSectionStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 0;
`;
