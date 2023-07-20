import { theme } from '@/styles/theme';

export const kanbanBoardList = [
  {
    title: 'To do',
    labelColor: theme.colors.todo,
    issues: [
      { id: 1, title: 'issue1' },
      { id: 2, title: 'issue2' },
    ],
  },
  { title: 'In progress', labelColor: theme.colors.inProgress },
  { title: 'Done', labelColor: theme.colors.done },
];
