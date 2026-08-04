import RadialGauge from "./RadialGauge";

export default function PerformanceMetrics({ data }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
      <h3 className="text-base font-bold text-ink-900">Performance Metrics</h3>

      <div className="mt-6 flex items-center justify-center gap-10 border-b border-gray-100 pb-6">
        <RadialGauge value={data.reliabilityScore} color="#3b82f6" label="Reliability Score" />
        <div className="h-20 w-px bg-gray-100" />
        <RadialGauge value={data.onTimeDelivery} color="#019E59" label="On-Time Delivery" />
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex-1">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-amber-500"
              style={{ width: `${data.acceptanceRate}%` }}
            />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-ink-900">
            {data.acceptanceRate}%{" "}
            <span className="text-base font-medium text-[#121721] opacity-70">Acceptance Rate</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-base text-[#121721] opacity-70">Avg Response</p>
          <p className="text-2xl font-extrabold text-ink-900">{data.avgResponseHours} hrs</p>
        </div>
      </div>
    </div>
  );
}