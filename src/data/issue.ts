import { IssueStateType, IssueStatusType } from '@/types/issue';

export const issueData: IssueStateType[] = [
  {
    status: IssueStatusType.TODO,
    id: 'todo-1',
    title: 'TODO 1',
  },
  {
    status: IssueStatusType.TODO,
    id: 'todo-2',
    title: 'TODO 2',
  },
  {
    status: IssueStatusType.IN_PROGRESS,
    id: 'progress-1',
    title: 'PROGRESS 1',
  },
];
