import IconPlaceholder from "./IconPlaceholder";

function MiniStatCard({ iconLabel, iconBg, value, title, delta, direction, highlight, badge }) {
  return (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-card ${
        highlight ? "border-brand-500" : "border-gray-100"
      }`}
    >
      <div className="flex items-center justify-between">
        <IconPlaceholder label={iconLabel} size={36} rounded="rounded-xl" className={iconBg} />
        {badge ? (
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
            {badge}
          </span>
        ) : (
          delta && (
            <span
              className={`flex items-center gap-0.5 text-xs font-semibold ${
                direction === "up" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              <IconPlaceholder label={`ICON: trend arrow ${direction}`} size={10} />
              {delta}
            </span>
          )
        )}
      </div>
      <p className="mt-3 text-2xl font-extrabold text-ink-900">
        {String(value).padStart(2, "0")}
      </p>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-ink-500">{title}</p>
        <IconPlaceholder label="ICON: open/external link" size={12} />
      </div>
    </div>
  );
}

export default function MiniStatsGrid({ data }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <MiniStatCard
        iconLabel="ICON: canceled/x-circle"
        iconBg="border-red-200 bg-red-50"
        value={data.canceledShipments.value}
        title="Canceled Shipments"
        delta={data.canceledShipments.delta}
        direction={data.canceledShipments.direction}
      />
      <MiniStatCard
        iconLabel="ICON: delivered/double-check"
        iconBg="border-blue-200 bg-blue-50"
        value={data.deliveredShipments.value}
        title="Delivered Shipments"
        delta={data.deliveredShipments.delta}
        direction={data.deliveredShipments.direction}
      />
      <MiniStatCard
        iconLabel="ICON: calendar/today"
        iconBg="border-gray-200 bg-gray-100"
        value={data.todayShipments.value}
        title="Today Shipments"
        delta={data.todayShipments.delta}
        direction={data.todayShipments.direction}
      />
      <MiniStatCard
        iconLabel="ICON: AI sparkle/suggestion"
        iconBg="border-brand-200 bg-brand-50"
        value={data.aiShipmentMatch.value}
        title="AI Shipment Match"
        badge={data.aiShipmentMatch.badge}
        highlight
      />
    </div>
  );
}