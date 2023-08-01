import { theme } from '@/styles/theme';

export default function EmptyCircleIcon({ ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity="0.7" cx="12" cy="12" r="11" stroke={theme.colors.primary} strokeWidth="2" />
    </svg>
  );
}
