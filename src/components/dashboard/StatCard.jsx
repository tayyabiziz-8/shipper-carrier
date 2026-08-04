import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

export default function StatCard({ label, value, delta, icon: Icon, muted = false }) {
  const TrendIcon = (delta || "").trim().startsWith("0") ? TrendingUpRoundedIcon : TrendingUpRoundedIcon;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            muted ? "bg-gray-100 text-gray-300" : "bg-brand-50 text-[#019E59]"
          }`}
        >
          <Icon fontSize="small" />
        </span>
      </div>
      <p className={`mt-3 text-3xl font-extrabold ${muted ? "text-gray-300" : "text-ink-900"}`}>
        {value}
      </p>
      <p className="mt-2 flex items-center gap-1 text-xs text-ink-500">
        <TrendIcon sx={{ fontSize: 14 }} className={muted ? "text-gray-300" : "text-brand-600"} />
        {delta}
      </p>
    </div>
  );
}