import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

import DashboardLayout from "../../layouts/DashboardLayout";
import DetailField from "../../components/marketplace/DetailField";
import LocationCard from "../../components/marketplace/LocationCard";
import SubmitOfferModal from "../../components/marketplace/SubmitOfferModal";
import { mockUsers } from "../../mock/dashboardData";
import { mockLoadDetail } from "../../mock/loadsData";
import mapImg from "../../assets/map.png";

function BooleanPill({ label, value }) {
  return (
    <div className="flex flex-1 items-center justify-between rounded-lg bg-emerald-50 px-4 py-2.5">
      <span className="text-sm text-ink-700">
        {label}: <span className="font-bold text-ink-900">{value ? "Yes" : "No"}</span>
      </span>
      <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500 text-white">
        <CheckRoundedIcon sx={{ fontSize: 14 }} />
      </span>
    </div>
  );
}

function MaskedInfoRowInline({ children }) {
  return (
    <div className="mt-4 rounded-lg bg-amber-50 px-3 py-2.5 text-xs text-amber-800">{children}</div>
  );
}

export default function LoadDetail() {
  const navigate = useNavigate();
  const [offerOpen, setOfferOpen] = useState(false);
  const user = mockUsers.carrier;
  const load = mockLoadDetail;

  return (
    <DashboardLayout user={user}>
      <button
        type="button"
        onClick={() => navigate("/carrier/marketplace")}
        className="flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-900"
      >
        <ChevronLeftRoundedIcon fontSize="small" />
        Back to Marketplace
      </button>
      <h1 className="mb-6 mt-1 text-2xl font-extrabold text-ink-900">Load Detail</h1>

      {/* Header banner */}
      <div className="flex flex-col gap-4 rounded-2xl bg-[#0b0f19] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-2xl font-extrabold text-white">{load.id}</p>
          <p className="mt-1 text-sm text-gray-400">{load.summary}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            <BookmarkBorderRoundedIcon fontSize="small" />
            Save Load
          </button>
          <button
            type="button"
            aria-label="Open in new tab"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10"
          >
            <OpenInNewRoundedIcon fontSize="small" />
          </button>
        </div>
      </div>

      <img
        src={mapImg}
        alt={`Route from ${load.route.from} to ${load.route.to}`}
        className="mt-4 w-full rounded-2xl"
      />

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h3 className="text-base font-bold text-ink-900">Load Information</h3>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <DetailField label="Load Type" value={load.loadType} />
              <DetailField label="Commodity" value={load.commodity} />
              <DetailField label="Cargo Description" value={load.cargoDescription} />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-500 shadow-sm">
                  <ScaleRoundedIcon fontSize="small" />
                </span>
                <div>
                  <p className="text-xs text-ink-500">Weight</p>
                  <p className="text-sm font-semibold text-ink-900">{load.weight}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-500 shadow-sm">
                  <ViewInArRoundedIcon fontSize="small" />
                </span>
                <div>
                  <p className="text-xs text-ink-500">Dimensions</p>
                  <p className="text-sm font-semibold text-ink-900">{load.dimensions}</p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Equipment Requirements
            </p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <DetailField label="Equipment Type" value={load.equipmentType} />
              <DetailField label="Trailer Length" value={load.trailerLength} />
              <DetailField label="Special Req." value={load.specialReq} />
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <BooleanPill label="Hazmat" value={load.hazmat} />
              <BooleanPill label="Oversize" value={load.oversize} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-400">Schedule</p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex justify-between">
                <span className="text-sm text-ink-500">Pickup Date</span>
                <span className="text-sm font-semibold text-ink-900">{load.schedule.pickupDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-ink-500">Delivery Date</span>
                <span className="text-sm font-semibold text-ink-900">{load.schedule.deliveryDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-ink-500">Pickup Window</span>
                <span className="text-sm font-semibold text-ink-900">{load.schedule.pickupWindow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-ink-500">Delivery Window</span>
                <span className="text-sm font-semibold text-ink-900">{load.schedule.deliveryWindow}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <LocationCard title="Pickup Location" location={load.pickupLocation} />
            <LocationCard title="Delivery Location" location={load.deliveryLocation} />
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h3 className="text-base font-bold text-ink-900">Cargo Images</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {load.cargoImages.map((caption) => (
                <div key={caption}>
                  <div className="flex aspect-square items-center justify-center rounded-xl bg-gray-100">
                    <ImageRoundedIcon className="text-gray-300" sx={{ fontSize: 32 }} />
                  </div>
                  <p className="mt-2 text-xs text-ink-500">{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink-900">Shipper Profile</h3>
              <button type="button" className="text-sm font-semibold text-ink-500 hover:text-ink-900">
                View Details
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <ViewInArRoundedIcon />
              </span>
              <div>
                <p className="font-bold text-ink-900">{load.shipper.name}</p>
                <p className="text-xs text-ink-500">Member since {load.shipper.memberSince}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                <p className="text-xs uppercase tracking-wide text-ink-400">Load</p>
                <p className="text-lg font-extrabold text-ink-900">{load.shipper.loadsPosted}</p>
              </div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                <p className="text-xs uppercase tracking-wide text-ink-400">Rating</p>
                <p className="flex items-center gap-1 text-lg font-extrabold text-ink-900">
                  {load.shipper.rating}
                  <StarRoundedIcon sx={{ fontSize: 18 }} className="text-amber-400" />
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
                <VerifiedRoundedIcon sx={{ fontSize: 16 }} />
                Verified Shipper
              </span>
              <span className="text-emerald-600">Avg payment: {load.shipper.avgPaymentDays} days</span>
            </div>

            <MaskedInfoRowInline>
              Company name and contact info revealed after both parties sign the Rate Confirmation.
            </MaskedInfoRowInline>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h3 className="text-base font-bold text-ink-900">Submit Offer</h3>
            <p className="mt-4 text-xs uppercase tracking-wide text-ink-400">Shipper Price Range</p>
            <div className="mt-1.5 rounded-lg bg-gray-50 py-3 text-center">
              <span className="text-xl font-extrabold text-[#019E59]">
                ${load.shipperRange.min.toLocaleString()}.00 – ${load.shipperRange.max.toLocaleString()}.00
              </span>
            </div>

            <div className="mt-4 flex justify-between text-sm">
              <div>
                <p className="text-xs text-ink-500">Rate per Mile</p>
                <p className="font-semibold text-ink-900">
                  ${load.ratePerMile.min.toFixed(2)} – ${load.ratePerMile.max.toFixed(2)} / mi
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-ink-500">Market Avg (this lane)</p>
                <p className="font-semibold text-ink-900">${load.marketAvgThisLane.toLocaleString()}.00</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOfferOpen(true)}
              className="mt-5 w-full rounded-lg bg-[#019E59] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Submit Offer
            </button>
            <button
              type="button"
              className="mt-3 w-full text-center text-sm text-ink-500 hover:text-ink-900"
            >
              Save for Later
            </button>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              Special Instructions
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {load.specialInstructions.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-ink-700">
                  <CircleRoundedIcon sx={{ fontSize: 6 }} className="mt-1.5 shrink-0 text-ink-400" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SubmitOfferModal
        load={{
          ...load,
          cargo: `${load.equipmentType} — ${load.cargoDescription}`,
          equipment: "FTL",
          from: load.route.from,
          to: load.route.to,
        }}
        open={offerOpen}
        onClose={() => setOfferOpen(false)}
      />
    </DashboardLayout>
  );
}