import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

function Dropdown({ placeholder }) {
  return (
    <button
      type="button"
      className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-left text-sm text-ink-400 hover:border-gray-300"
    >
      {placeholder}
      <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
    </button>
  );
}

export default function SavedLoadsFilterBar({ viewMode, onViewModeChange }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
          <Dropdown placeholder="Equipment" />
          <Dropdown placeholder="Load Type" />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-ink-700">
          <span className="flex items-center gap-2">
            Sort By: <span className="font-semibold text-ink-900">Newest</span>
            <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
          </span>
          <span className="hidden text-gray-200 sm:inline">|</span>
          <span className="flex items-center gap-2">
            Status: <span className="font-semibold text-ink-900">All</span>
            <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
          </span>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#019E59] px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            <SearchRoundedIcon fontSize="small" />
            Search
          </button>

          <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              aria-label="Grid view"
              className={`rounded p-1.5 ${
                viewMode === "grid" ? "bg-brand-50 text-[#019E59]" : "text-ink-400 hover:text-ink-700"
              }`}
            >
              <GridViewRoundedIcon fontSize="small" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              aria-label="List view"
              className={`rounded p-1.5 ${
                viewMode === "list" ? "bg-brand-50 text-[#019E59]" : "text-ink-400 hover:text-ink-700"
              }`}
            >
              <ViewListRoundedIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}