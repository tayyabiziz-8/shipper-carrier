import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

function MiniStatCard({ icon: Icon, iconBg, iconColor, value, title, delta, direction, highlight, badge }) {
  const TrendIcon = direction === "up" ? TrendingUpRoundedIcon : TrendingDownRoundedIcon;

  return (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-card ${
        highlight ? "border-brand-500" : "border-gray-100"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
          <Icon fontSize="small" />
        </span>
        {badge ? (
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
            {badge}
          </span>
        ) : (
          delta && (
            <span
              className={`flex items-center gap-0.5 text-xs font-semibold ${
                direction === "up" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              <TrendIcon sx={{ fontSize: 12 }} />
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
        <ArrowOutwardRoundedIcon sx={{ fontSize: 12 }} className="text-ink-300" />
      </div>
    </div>
  );
}

export default function MiniStatsGrid({ data }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <MiniStatCard
        icon={CancelRoundedIcon}
        iconBg="bg-red-50"
        iconColor="text-red-500"
        value={data.canceledShipments.value}
        title="Canceled Shipments"
        delta={data.canceledShipments.delta}
        direction={data.canceledShipments.direction}
      />
      <MiniStatCard
        icon={DoneAllRoundedIcon}
        iconBg="bg-blue-50"
        iconColor="text-blue-500"
        value={data.deliveredShipments.value}
        title="Delivered Shipments"
        delta={data.deliveredShipments.delta}
        direction={data.deliveredShipments.direction}
      />
      <MiniStatCard
        icon={TodayRoundedIcon}
        iconBg="bg-gray-100"
        iconColor="text-gray-500"
        value={data.todayShipments.value}
        title="Today Shipments"
        delta={data.todayShipments.delta}
        direction={data.todayShipments.direction}
      />
      <MiniStatCard
        icon={AutoAwesomeRoundedIcon}
        iconBg="bg-brand-50"
        iconColor="text-[#019E59]"
        value={data.aiShipmentMatch.value}
        title="AI Shipment Match"
        badge={data.aiShipmentMatch.badge}
        highlight
      />
    </div>
  );
}