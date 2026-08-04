import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const STATUS_STYLES = {
  "In Transit": "bg-blue-50 text-blue-700",
  Breakdown: "bg-red-50 text-red-700",
  Pending: "bg-amber-50 text-amber-700",
  Delivered: "bg-emerald-50 text-emerald-700",
};

function Pill({ children, className }) {
  return (
    <span className={`inline-flex rounded-md px-2 py-1 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}

export default function ShipmentsTable({ shipments, onViewAll }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-ink-900">Shipments</h3>
        <button
          type="button"
          onClick={onViewAll}
          className="rounded-3xl border border-gray-200 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-gray-50"
        >
          View All
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-ink-400">
              <th className="py-3 pr-4 font-semibold">Shipment #</th>
              <th className="py-3 pr-4 font-semibold">Load #</th>
              <th className="py-3 pr-4 font-semibold">Route</th>
              <th className="py-3 pr-4 font-semibold">Progress</th>
              <th className="py-3 pr-4 font-semibold">Status</th>
              <th className="py-3 pr-4 font-semibold">Escrow</th>
              <th className="py-3 pr-4 font-semibold">Pickup</th>
              <th className="py-3 pr-4 font-semibold">Amount</th>
              <th className="py-3" />
            </tr>
          </thead>
          <tbody>
            {shipments.map((s, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-4 pr-4 font-medium text-[#121721] opacity-50">{s.id}</td>
                <td className="py-4 pr-4 font-medium text-[#019E59]">{s.load}</td>
                <td className="py-4 pr-4">
                  <p className="flex items-center gap-1.5 text-ink-900">
                    {s.from}
                    <ArrowRightAltRoundedIcon fontSize="small" className="text-ink-300" />
                    {s.to}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500">{s.cargo}</p>
                  <p className="text-xs text-ink-400">{s.equipment}</p>
                </td>
                <td className="py-4 pr-4">
                  <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#019E59]"
                      style={{ width: `${s.progress}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-ink-500">{s.progress}%</p>
                </td>
                <td className="py-4 pr-4">
                  <Pill className={STATUS_STYLES[s.status] || "bg-gray-100 text-ink-700"}>
                    {s.status}
                  </Pill>
                </td>
                <td className="py-4 pr-4">
                  <Pill className="bg-amber-50 text-amber-700">{s.escrow}</Pill>
                </td>
                <td className="py-4 pr-4 text-[#121721] opacity-50">{s.pickup}</td>
                <td className="py-4 pr-4 font-bold text-ink-900">{s.amount}</td>
                <td className="py-4">
                  <ChevronRightRoundedIcon fontSize="small" className="text-ink-300" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}