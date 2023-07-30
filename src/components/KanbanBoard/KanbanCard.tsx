import { css } from '@emotion/react';
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { useIssue } from '@/hooks/useIssue';
import { IssueStateType, IssueStatusType } from '@/types/issue';

import Label from '../common/Label';
import CreateIssueBtn from './CreateIssueBtn';
import IssueMemo from './IssueMemo';

type KanbanCardProps = {
  status: IssueStatusType;
  title: string;
  labelColor: string;
  issueList?: IssueStateType[];
};

export default function KanbanCard({ status, title, labelColor, issueList }: KanbanCardProps) {
  const [isCreateIssue, setIsCreateIssue] = useState(false);

  const { createIssue } = useIssue();

  const handleCreateBtnClick = () => {
    setIsCreateIssue(true);
  };

  const handleIssueBlur = () => {
    setIsCreateIssue(false);
  };

  const handleCreateIssue = (title: string) => {
    setIsCreateIssue(false);
    createIssue({ status, title });
  };

  return (
    <div css={kanbanLayoutStyle}>
      <div css={kanbanCardStyle}>
        <Label bgColor={labelColor}>{title}</Label>
        <Droppable droppableId={status}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} css={droppableStyle}>
              <CreateIssueBtn onClick={handleCreateBtnClick} css={createIssueBtnStyle} />
              {issueList?.map((issue, index) => (
                <Draggable key={issue.id} draggableId={issue.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <IssueMemo issue={issue} />
                    </div>
                  )}
                </Draggable>
              ))}
              {isCreateIssue && (
                <IssueMemo autoFocus onBlur={handleIssueBlur} onCreateIssue={handleCreateIssue} />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}

const kanbanLayoutStyle = css`
  width: 100%;
  min-width: 280px;
  display: flex;
  flex-direction: column;
`;

const kanbanCardStyle = css`
  min-height: 185px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 10px;
  padding-bottom: 15px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 15px;
`;

const droppableStyle = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
`;

const createIssueBtnStyle = css`
  width: fit-content;
`;
