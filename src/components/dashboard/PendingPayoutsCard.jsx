import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

export default function PendingPayoutsCard({ items }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold text-ink-900">Pending Payouts</h2>
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#019E59] px-1.5 text-xs font-semibold text-white">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-3 flex-1 space-y-4 overflow-y-auto pr-1">
        {items.map((item, i) => (
          <div key={i} className={i !== items.length - 1 ? "border-b border-gray-100 pb-4" : ""}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink-900">{item.id}</span>
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                {item.status}
              </span>
            </div>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-700">
              {item.from}
              <ArrowRightAltRoundedIcon fontSize="small" className="text-brand-500" />
              {item.to}
            </p>
            <div className="mt-1.5 flex items-center justify-between text-xs text-ink-500">
              <span>Delivered {item.delivered}</span>
              <span className="text-lg font-bold text-brand-700">{item.amount}</span>
            </div>
            <p className="mt-0.5 text-right text-xs text-ink-400">{item.payoutDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}