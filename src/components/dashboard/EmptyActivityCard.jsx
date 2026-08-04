import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function EmptyActivityCard({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-20 text-center shadow-card">
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-50">
        <SearchOffRoundedIcon sx={{ fontSize: 52 }} className="text-gray-300" />
      </div>
      <h3 className="text-xl font-bold text-[#121721] opacity-50">No activity yet.</h3>
      <p className="mt-1 text-base text-[#121721] opacity-50">Browse the marketplace to find your first load.</p>
      <button
        type="button"
        onClick={onBrowse}
        className="mt-6 flex items-center gap-2 rounded-lg bg-[#019E59] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        Browse Marketplace
        <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
      </button>
    </div>
  );
}