import { theme } from '@/styles/theme';
import { IssueStatusType } from '@/types/issue';

export const kanbanBoardTitleData = [
  {
    status: IssueStatusType.TODO,
    title: 'To do',
    labelColor: theme.colors.primary,
  },
  {
    status: IssueStatusType.IN_PROGRESS,
    title: 'In progress',
    labelColor: theme.colors.green,
  },
  {
    status: IssueStatusType.DONE,
    title: 'Done',
    labelColor: theme.colors.darkGreen,
  },
];

export const kanbanBoardList = [
  {
    title: 'To do',
    labelColor: theme.colors.todo,
    issues: [
      { id: '1', title: 'issue1' },
      { id: '2', title: 'issue2' },
    ],
  },
  { title: 'In progress', labelColor: theme.colors.inProgress },
  { title: 'Done', labelColor: theme.colors.done },
];
