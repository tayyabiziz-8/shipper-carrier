import { useNavigate } from "react-router-dom";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

export default function LoadCard({ load, onSubmitOffer }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-brand-600">{load.id}</span>
        <div className="flex items-center gap-3 text-ink-400">
          <span className="text-xs">{load.postedAgo}</span>
          <button type="button" aria-label="Save load" className="hover:text-ink-600">
            <BookmarkBorderRoundedIcon fontSize="small" />
          </button>
        </div>
      </div>

      <p className="mt-3 font-bold text-ink-900">{load.cargo}</p>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-700">
        {load.from}
        <ArrowRightAltRoundedIcon fontSize="small" className="text-brand-500" />
        {load.to}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-700">
          {load.weight}
        </span>
        <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-700">
          {load.distance}
        </span>
        <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-700">
          {load.equipment}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-xl font-extrabold text-ink-900">{load.priceLabel}</p>
          <p className="text-xs text-ink-500">Pickup: {load.pickupDate}</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(`/carrier/marketplace/${load.id}`)}
            className="text-sm font-semibold text-ink-500 hover:text-ink-900"
          >
            Details
          </button>
          <button
            type="button"
            onClick={() => onSubmitOffer(load)}
            className="rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
          >
            Submit Offer
          </button>
        </div>
      </div>
    </div>
  );
}