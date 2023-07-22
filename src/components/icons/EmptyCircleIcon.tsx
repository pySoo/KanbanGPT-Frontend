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
      <circle opacity="0.6" cx="12" cy="12" r="11" stroke="#d9d9d9" stroke-width="2" />
    </svg>
  );
}
