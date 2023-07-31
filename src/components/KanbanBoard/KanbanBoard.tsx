import { css } from '@emotion/react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { kanbanBoardTitleData } from '@/constants/kanbanBoard';
import { useIssue } from '@/hooks/useIssue';
import useRequestAnimation from '@/hooks/useRequestAnimation';
import { IssueStatusType } from '@/types/issue';

import KanbanCard from './KanbanCard';

export default function KanbanBoard() {
  const { issueData, reorderIssue, moveIssue } = useIssue();

  // react-beautiful-dnd 사용을 위해 Paint 과정이 수행된 후에 렌더링하는 것이 필요
  const [isPainted] = useRequestAnimation();

  if (!isPainted) return;

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    const sourceStatus = source.droppableId as IssueStatusType;
    const destinationStatus = destination.droppableId as IssueStatusType;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (sourceStatus === destinationStatus) {
      reorderIssue({ status: sourceStatus, sourceIndex, destinationIndex });
    } else {
      moveIssue({
        sourceStatus,
        destinationStatus,
        sourceIndex,
        destinationIndex,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ul css={kanbanBoardListStyle}>
        {kanbanBoardTitleData.map(({ status, title, labelColor }) => (
          <KanbanCard
            key={status}
            status={status}
            title={title}
            labelColor={labelColor}
            issueList={issueData[status]}
          />
        ))}
      </ul>
    </DragDropContext>
  );
}
const kanbanBoardListStyle = css`
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-top: 10px;
  gap: 16px;
  display: flex;
  overflow: auto;
`;
