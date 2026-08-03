export default function BrandMark({
  size = 90,
  showWordmark = true,
  showIcon = true,
  light = false,
  className = "",
}) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {showWordmark && (
        <span
          className={`text-sm font-bold tracking-tight ${light ? "text-white" : "text-ink-900"}`}
        >
          shippermeetcarrier.com
        </span>
      )}
      {showIcon && (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="50" cy="50" r="49" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
        <path
          d="M50 3a47 47 0 0 1 0 94"
          fill="none"
          stroke="#d1e7dd"
          strokeWidth="0.5"
        />
      </svg>
      )}
    </div>
  );
}
