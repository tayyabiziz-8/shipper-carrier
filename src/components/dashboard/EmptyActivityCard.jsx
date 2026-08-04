import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import emptyStateImg from "../../assets/emptystate.png";

export default function EmptyActivityCard({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-20 text-center shadow-card">
      <img src={emptyStateImg} alt="" className="mb-6 h-auto w-full max-w-[220px]" />
      <h3 className="text-lg font-bold text-ink-900">No activity yet.</h3>
      <p className="mt-1 text-sm text-ink-500">Browse the marketplace to find your first load.</p>
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