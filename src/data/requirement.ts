import { RequirementStateType } from '@/types/issue';

import { mockGptCode } from './gpt';

export const requirementData: RequirementStateType[] = [
  {
    issueId: 'todo-1',
    id: 'require-1',
    title: '요구사항 1',
    gpt: mockGptCode,
    isCompleted: true,
  },
  {
    issueId: 'todo-1',
    id: 'require-2',
    title: '요구사항 2',
    isCompleted: false,
  },
  {
    issueId: 'todo-1',
    id: 'require-3',
    title: '요구사항 3',
    isCompleted: true,
  },
  {
    issueId: 'require-1',
    id: 'require-4',
    title: '요구사항 1',
    isCompleted: true,
  },
];
