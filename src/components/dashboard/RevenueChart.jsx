import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

export default function RevenueChart({ points, highlightIndex, range = "Monthly" }) {
  const highlighted = points[highlightIndex];
  const tooltipLeft = ((highlightIndex + 0.5) / points.length) * 100;

  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-ink-900">Revenue</h2>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-ink-700 hover:border-gray-300"
        >
          {range}
          <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
        </button>
      </div>

      <div className="relative mt-4 h-72">
        {highlighted && (
          <div
            className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-card"
            style={{ left: `${tooltipLeft}%` }}
          >
            <p className="text-xs text-ink-500">Total Earning</p>
            <p className="text-lg font-extrabold text-ink-900">
              ${highlighted.value.toLocaleString()}
            </p>
          </div>
        )}

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={points} margin={{ top: 70, right: 8, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => (v === 0 ? "$0" : `$${v / 1000},000`)}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              width={56}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={36}>
              {points.map((_, i) => (
                <Cell key={i} fill={i === highlightIndex ? "#3C82F5" : "#e5e7eb"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button
        type="button"
        aria-label="Next period"
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-ink-500 shadow-card hover:text-ink-900"
      >
        <ChevronRightRoundedIcon fontSize="small" />
      </button>
    </div>
  );
}