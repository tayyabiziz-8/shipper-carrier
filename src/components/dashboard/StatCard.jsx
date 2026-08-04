import IconPlaceholder from "./IconPlaceholder";

export default function StatCard({ label, value, delta, icon, muted = false }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
        <IconPlaceholder
          label={icon}
          size={36}
          rounded="rounded-full"
          className={muted ? "border-gray-200 bg-gray-100" : "border-brand-200 bg-brand-50"}
        />
      </div>
      <p className={`mt-3 text-3xl font-extrabold ${muted ? "text-gray-300" : "text-ink-900"}`}>
        {value}
      </p>
      <p className="mt-2 flex items-center gap-1 text-xs text-ink-500">
        <IconPlaceholder label="STAT ICON: trend arrow" size={14} />
        {delta}
      </p>
    </div>
  );
}