import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

function LocationInput({ placeholder, radiusOptions = ["50 mi", "100 mi", "250 mi", "500 mi"] }) {
  return (
    <div className="flex flex-1 items-center rounded-lg border border-gray-200 bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
      />
      <div className="flex shrink-0 items-center gap-1 border-l border-gray-200 px-3 text-sm text-ink-500">
        {radiusOptions[1]}
        <KeyboardArrowDownRoundedIcon fontSize="small" />
      </div>
    </div>
  );
}

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

export default function FiltersBar({ viewMode, onViewModeChange }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <LocationInput placeholder="Origin" />
        <button
          type="button"
          aria-label="Swap origin and destination"
          className="hidden shrink-0 text-[#019E59] hover:text-brand-600 lg:block"
        >
          <SwapHorizRoundedIcon />
        </button>
        <LocationInput placeholder="Destination" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Dropdown placeholder="Equipment" />
        <Dropdown placeholder="Load Type" />
        <input
          type="text" placeholder="Length ft"
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#019E59] focus:outline-none"
        />
        <input
          type="text" placeholder="Weight lbs"
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#019E59] focus:outline-none"
        />
        <button
          type="button"
          className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-left text-sm text-ink-400 hover:border-gray-300"
        >
          Date Range
          <CalendarMonthRoundedIcon fontSize="small" />
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-sm text-ink-700">
          <span className="flex items-center gap-2">
            Search Range: <span className="font-semibold text-ink-900">24 hrs</span>
            <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
          </span>
          <span className="flex items-center gap-2">
            Sort By: <span className="font-semibold text-ink-900">Age - Newest</span>
            <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
          </span>
          <span className="flex items-center gap-2">
            Price Range: <span className="font-semibold text-ink-900">--</span>
            <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
          </span>
        </div>

        <div className="flex items-center gap-2">
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