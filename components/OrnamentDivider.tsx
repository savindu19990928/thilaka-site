export function OrnamentDivider({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const lineColor = dark ? "bg-[#D4AF63]/25" : "bg-[#DEC89A]";
  const iconColor = dark ? "text-[#D4AF63]" : "text-[#A67C2E]";

  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className={`h-px flex-1 max-w-28 ${lineColor}`} />
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        className={iconColor}
      >
        <path
          d="M12 1C13.6 4.4 14.2 7.8 12 12C9.8 7.8 10.4 4.4 12 1Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M12 12C8.6 10.6 5.6 8.6 4 5.2C7.4 5.4 10 7.8 12 12Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M12 12C15.4 10.6 18.4 8.6 20 5.2C16.6 5.4 14 7.8 12 12Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <line
          x1="5"
          y1="14.5"
          x2="19"
          y2="14.5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      <span className={`h-px flex-1 max-w-28 ${lineColor}`} />
    </div>
  );
}
