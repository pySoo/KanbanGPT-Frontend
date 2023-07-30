import { css } from '@emotion/react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { kanbanBoardTitleData } from '@/constants/kanbanBoard';
import { useIssue } from '@/hooks/useIssue';
import useRequestAnimation from '@/hooks/useRequestAnimation';
import { theme, ThemeType } from '@/styles/theme';
import { IssueStatusType } from '@/types/issue';

import KanbanCard from './KanbanCard';

export default function KanbanBoard() {
  const { issueData, reorderIssue, moveIssue } = useIssue();

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
      <section css={kanbanBoardListStyle(theme)}>
        {kanbanBoardTitleData.map(({ status, title, labelColor }) => (
          <KanbanCard
            key={status}
            status={status}
            title={title}
            labelColor={labelColor}
            issueList={issueData[status]}
          />
        ))}
      </section>
    </DragDropContext>
  );
}
const kanbanBoardListStyle = (theme: ThemeType) => css`
  width: 100vw;
  height: 100%;
  display: flex;
  gap: 10px;
  overflow: auto;
  padding: 0 20px;
`;
