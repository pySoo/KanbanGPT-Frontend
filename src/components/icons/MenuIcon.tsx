export default function MenuIcon({ ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={{
        cursor: 'pointer',
      }}
      {...props}
    >
      <g clipPath="url(#clip0_4_336)">
        <path
          d="M3.75 22.5H26.25V20H3.75V22.5ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 7.5V10H26.25V7.5H3.75Z"
          fill="#323232"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_336">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
