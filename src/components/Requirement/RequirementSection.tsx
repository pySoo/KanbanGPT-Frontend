import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Panel, PanelGroup } from 'react-resizable-panels';

import { useRequirement } from '@/hooks/useRequirement';
import { RequirementStateType } from '@/types/requirement';

import ResizeHandle from '../common/ResizeHandle';
import GPTPrompt from '../gpt/GptPrompt';
import RequirementList from './RequirementList';

type RequirementSectionProps = {
  selectedIssueId: string;
};

export default function RequirementSection({ selectedIssueId }: RequirementSectionProps) {
  const [selectedRequireId, setSelectedRequireId] = useState<string | undefined>(undefined);
  const [selectedRequire, setSelectedRequire] = useState<RequirementStateType | undefined>(
    undefined,
  );
  const { getRequireByIssueId } = useRequirement();

  const requirementList = getRequireByIssueId({ issueId: selectedIssueId });

  const handleSelectId = (id?: string) => {
    setSelectedRequireId(id);
  };

  useEffect(() => {
    const filteredRequire = requirementList?.filter((value) => value.id === selectedRequireId)[0];
    setSelectedRequire(filteredRequire);
  }, [selectedRequireId, requirementList]);

  return (
    <section css={requirementSectionStyle}>
      <PanelGroup direction="horizontal">
        <Panel>
          <RequirementList
            issueId={selectedIssueId}
            requirements={requirementList}
            onSelectId={handleSelectId}
          />
        </Panel>
        <ResizeHandle />
        <Panel>
          <GPTPrompt requirement={selectedRequire} />
        </Panel>
      </PanelGroup>
    </section>
  );
}

const requirementSectionStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px 0;
`;