import IconPlaceholder from "./IconPlaceholder";

export default function EmptyActivityCard({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-20 text-center shadow-card">
      <IconPlaceholder
        label="ILLUSTRATION: empty-state graphic (folder + magnifying glass, no results found)"
        size={180}
        rounded="rounded-2xl"
        className="mb-6 !h-[160px] !w-[220px] text-[8px]"
      />
      <h3 className="text-lg font-bold text-ink-900">No activity yet.</h3>
      <p className="mt-1 text-sm text-ink-500">Browse the marketplace to find your first load.</p>
      <button
        type="button"
        onClick={onBrowse}
        className="mt-6 flex items-center gap-2 rounded-lg bg-[#019E59] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Browse Marketplace
        <IconPlaceholder label="ICON: arrow right" size={14} className="border-white/40 bg-white/10" />
      </button>
    </div>
  );
}