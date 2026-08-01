const LEVELS = [
  { label: "Weak", color: "bg-red-500", width: "w-1/4" },
  { label: "Fair", color: "bg-amber-400", width: "w-2/4" },
  { label: "Good", color: "bg-blue-500", width: "w-3/4" },
  { label: "Strong", color: "bg-brand-600", width: "w-full" },
];

export function scorePassword(password) {
  if (!password) return -1;
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return Math.min(score, 4) - 1;
}

export default function PasswordStrengthBar({ password }) {
  const score = scorePassword(password);
  if (score < 0) return null;
  const level = LEVELS[score];

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-ink-500">Strength:</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div className={`h-full rounded-full transition-all ${level.color} ${level.width}`} />
      </div>
      <span className="text-xs text-ink-500">{level.label}</span>
    </div>
  );
}
