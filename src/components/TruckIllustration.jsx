export default function TruckIllustration() {
  return (
    <svg
      viewBox="0 0 600 260"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="speedline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="600" height="260" fill="url(#sky)" />

      {/* road */}
      <rect x="0" y="220" width="600" height="40" fill="#1f2937" />
      <rect x="0" y="236" width="600" height="4" fill="#4b5563" opacity="0.6" />
      {/* trailer */}
      <rect x="30" y="120" width="230" height="90" rx="4" fill="#e5e7eb" />
      <rect x="30" y="120" width="230" height="10" fill="#d1d5db" />
      {/* cab */}
      <path d="M260 210 V150 Q260 138 274 138 H330 Q346 138 352 152 L368 195 V210 Z" fill="#f3f4f6" />
      <rect x="272" y="150" width="46" height="34" rx="3" fill="#0f2436" />
      {/* wheels */}
      <circle cx="90" cy="212" r="18" fill="#0b0f19" />
      <circle cx="90" cy="212" r="7" fill="#4b5563" />
      <circle cx="200" cy="212" r="18" fill="#0b0f19" />
      <circle cx="200" cy="212" r="7" fill="#4b5563" />
      <circle cx="330" cy="212" r="18" fill="#0b0f19" />
      <circle cx="330" cy="212" r="7" fill="#4b5563" />
      {/* headlight */}
      <circle cx="364" cy="196" r="4" fill="#fde68a" />
    </svg>
  );
}
