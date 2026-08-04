const DOT_COLOR = {
  success: "bg-emerald-500",
  info: "bg-blue-500",
  warning: "bg-amber-500",
};

export default function RecentActivity({ groups, onViewAll }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-ink-900">Recent Activity</h3>
        <button
          type="button"
          onClick={onViewAll}
          className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-gray-50"
        >
          View All Activity
        </button>
      </div>

      <div className="mt-4 max-h-72 overflow-y-auto pr-1">
        {groups.map((group) => (
          <div key={group.group} className="mb-4 last:mb-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
              {group.group}
            </p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${DOT_COLOR[item.type]}`}
                  />
                  <p className="flex-1 text-sm text-ink-700">{item.text}</p>
                  <span className="shrink-0 text-xs text-ink-400">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}