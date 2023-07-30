import { theme } from '@/styles/theme';

export default function CheckCircleIcon({ ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      className="absolute"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle cx="12" cy="12" r="12" fill={theme.colors.primary} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5386 8.47802C17.8268 8.77545 17.8194 9.25027 17.522 9.53855L11.3315 15.5386C11.0406 15.8205 10.5784 15.8205 10.2875 15.5386L6.47802 11.8462C6.18059 11.558 6.17317 11.0831 6.46145 10.7857C6.74973 10.4883 7.22455 10.4809 7.52198 10.7691L10.8095 13.9555L16.478 8.46145C16.7755 8.17317 17.2503 8.18059 17.5386 8.47802Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
