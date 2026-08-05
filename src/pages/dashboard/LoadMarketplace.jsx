import { useState } from "react";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import DashboardLayout from "../../layouts/DashboardLayout";
import FiltersBar from "../../components/marketplace/FiltersBar";
import LoadCard from "../../components/marketplace/LoadCard";
import Pagination from "../../components/marketplace/Pagination";
import SubmitOfferModal from "../../components/marketplace/SubmitOfferModal";
import { mockUsers } from "../../mock/dashboardData";
import { mockLoads } from "../../mock/loadsData";

const TOTAL_LOADS_AVAILABLE = 234;
const TOTAL_PAGES = 5;

export default function LoadMarketplace() {
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(3); // matches the mockup's active page
  const [selectedLoad, setSelectedLoad] = useState(null);
  const user = mockUsers.carrier;

  return (
    <DashboardLayout user={user}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-extrabold text-ink-900">Load Marketplace</h1>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#019E59] to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <AutoAwesomeRoundedIcon fontSize="small" />
          AI Match for My Fleet
        </button>
      </div>

      <FiltersBar viewMode={viewMode} onViewModeChange={setViewMode} />

      <p className="mt-4 text-sm text-ink-500">{TOTAL_LOADS_AVAILABLE} loads available</p>

      <div
        className={`mt-4 grid grid-cols-1 gap-4 ${
          viewMode === "grid" ? "lg:grid-cols-2" : ""
        }`}
      >
        {mockLoads.map((load, i) => (
          <LoadCard key={i} load={load} onSubmitOffer={setSelectedLoad} />
        ))}
      </div>

      <Pagination page={page} totalPages={TOTAL_PAGES} onPageChange={setPage} />

      <SubmitOfferModal
        load={selectedLoad}
        open={Boolean(selectedLoad)}
        onClose={() => setSelectedLoad(null)}
      />
    </DashboardLayout>
  );
}