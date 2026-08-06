import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import DashboardLayout from "../../layouts/DashboardLayout";
import SavedLoadsFilterBar from "../../components/marketplace/SavedLoadsFilterBar";
import SavedLoadCard from "../../components/marketplace/SavedLoadCard";
import Pagination from "../../components/marketplace/Pagination";
import SubmitOfferModal from "../../components/marketplace/SubmitOfferModal";
import RemoveLoadModal from "../../components/marketplace/RemoveLoadModal";
import { mockUsers } from "../../mock/dashboardData";
import { mockLoads } from "../../mock/loadsData";
import emptyLoadsIcon from "../../assets/emptyloads.png";

const TOTAL_PAGES = 5;

export default function SavedLoads() {
  const navigate = useNavigate();
  const user = mockUsers.carrier;

  const [savedLoads, setSavedLoads] = useState(
    mockLoads.map((load) => ({ ...load, savedDate: load.pickupDate }))
  );
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(3); // matches the mockup's active page
  const [selectedLoad, setSelectedLoad] = useState(null);
  const [loadToRemove, setLoadToRemove] = useState(null);

  const handleConfirmRemove = (load) => {
    setSavedLoads((prev) => prev.filter((l) => l !== load));
    setLoadToRemove(null);
  };

  return (
    <DashboardLayout user={user}>
      <h1 className="mb-6 text-2xl font-extrabold text-ink-900">Saved Loads</h1>

      <SavedLoadsFilterBar viewMode={viewMode} onViewModeChange={setViewMode} />

      {savedLoads.length === 0 ? (
        <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-24 text-center shadow-card">
          <img src={emptyLoadsIcon} alt="" className="h-50 w-50" />
          <h2 className="mt-2 text-lg font-bold text-ink-500">No saved loads yet.</h2>
          <p className="mt-1 max-w-sm text-sm text-ink-500">
            Browse the Marketplace and bookmark loads you're interested in.
          </p>
          <button
            type="button"
            onClick={() => navigate("/carrier/marketplace")}
            className="mt-6 flex items-center gap-2 rounded-lg bg-[#019E59] px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Browse Marketplace
            <ArrowForwardRoundedIcon fontSize="small" />
          </button>
        </div>
      ) : (
        <>
          <div
            className={`mt-4 grid grid-cols-1 gap-4 ${
              viewMode === "grid" ? "lg:grid-cols-2" : ""
            }`}
          >
            {savedLoads.map((load, i) => (
              <SavedLoadCard
                key={i}
                load={load}
                onSubmitOffer={setSelectedLoad}
                onRemove={setLoadToRemove}
              />
            ))}
          </div>

          <Pagination page={page} totalPages={TOTAL_PAGES} onPageChange={setPage} />
        </>
      )}

      <SubmitOfferModal
        load={selectedLoad}
        open={Boolean(selectedLoad)}
        onClose={() => setSelectedLoad(null)}
      />

      <RemoveLoadModal
        load={loadToRemove}
        open={Boolean(loadToRemove)}
        onClose={() => setLoadToRemove(null)}
        onConfirm={handleConfirmRemove}
      />
    </DashboardLayout>
  );
}