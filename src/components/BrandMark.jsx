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
        {/* US map dot texture, simplified */}
        <g fill="#c7d2cc">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => {
              const x = 18 + col * 8;
              const y = 14 + row * 6;
              if ((row === 0 && (col < 1 || col > 7)) || (row === 4 && col > 6)) return null;
              return <circle key={`${row}-${col}`} cx={x} cy={y} r="0.9" />;
            })
          )}
        </g>
        {/* truck */}
        <g transform="translate(20 46)">
          <rect x="0" y="0" width="26" height="14" rx="1.5" fill="#1f2937" />
          <rect x="27" y="4" width="13" height="10" rx="1.5" fill="#1f2937" />
          <rect x="30" y="6" width="6" height="5" fill="#a7f3d0" />
          <circle cx="8" cy="16" r="3.4" fill="#111827" />
          <circle cx="33" cy="16" r="3.4" fill="#111827" />
        </g>
        {/* handshake */}
        <g transform="translate(30 60)">
          <path
            d="M0 8 L8 2 L14 6 L20 2 L28 8 L20 14 L14 10 L8 14 Z"
            fill="#0f7d43"
          />
        </g>
      </svg>
      )}
    </div>
  );
}
