import { IssueStateType, IssueStatusType } from '@/types/issue';

import { mockGptCode } from './gpt';

export const issueData: IssueStateType[] = [
  {
    status: IssueStatusType.TODO,
    id: 'todo-1',
    title: 'TODO 1',
    requirements: [
      {
        id: 'require-1',
        title: '요구사항 1',
        gpt: mockGptCode,
        isCompleted: true,
      },
      {
        id: 'require-2',
        title: '요구사항 2',
        isCompleted: false,
      },
      {
        id: 'require-3',
        title: '요구사항 3',
        isCompleted: true,
      },
    ],
  },
  {
    status: IssueStatusType.TODO,
    id: 'todo-2',
    title: 'TODO 2',
    requirements: [
      {
        id: 'require-1',
        title: '요구사항 1',
        isCompleted: true,
      },
    ],
  },
  {
    status: IssueStatusType.IN_PROGRESS,
    id: 'progress-1',
    title: 'PROGRESS 1',
  },
];
