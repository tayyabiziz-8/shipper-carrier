import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import VerificationBanner from "../../components/dashboard/VerificationBanner";
import EmptyActivityCard from "../../components/dashboard/EmptyActivityCard";
import PerformanceMetrics from "../../components/dashboard/PerformanceMetrics";
import FleetStatus from "../../components/dashboard/FleetStatus";
import RecentActivity from "../../components/dashboard/RecentActivity";
import MiniStatsGrid from "../../components/dashboard/MiniStatsGrid";
import ShipmentsTable from "../../components/dashboard/ShipmentsTable";
import { mockUsers, emptyCarrierDashboard, activeCarrierDashboard } from "../../mock/dashboardData";

export default function CarrierDashboard() {
  // Dev-only toggle to preview both states from the mockups on one page.
  // Swap for a real "has the carrier done anything yet" check from your API.
  const [hasActivity, setHasActivity] = useState(true);
  const data = hasActivity ? activeCarrierDashboard : emptyCarrierDashboard;
  const user = mockUsers.carrier;

  return (
    <DashboardLayout user={user}>
      {/* DEV-ONLY STATE TOGGLE — remove once wired to real account data */}
      <div className="mb-4 flex justify-end">
        <div className="inline-flex rounded-full bg-gray-100 p-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setHasActivity(false)}
            className={`rounded-full px-3 py-1 ${!hasActivity ? "bg-white shadow-sm" : "text-ink-500"}`}
          >
            Empty state
          </button>
          <button
            type="button"
            onClick={() => setHasActivity(true)}
            className={`rounded-full px-3 py-1 ${hasActivity ? "bg-white shadow-sm" : "text-ink-500"}`}
          >
            Active carrier
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-extrabold text-ink-900">Dashboard</h1>
        {hasActivity ? (
          <button
            type="button"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Browse Loads
          </button>
        ) : (
          <div className="w-full max-w-sm">
            <VerificationBanner stepLabel={data.verification.stepLabel} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Active Shipments"
          value={String(data.stats.activeShipments.value).padStart(2, "0")}
          delta={data.stats.activeShipments.delta}
          icon="STAT ICON: truck"
          muted={!hasActivity}
        />
        <StatCard
          label="Available Loads"
          value={String(data.stats.availableLoads.value).padStart(2, "0")}
          delta={data.stats.availableLoads.delta}
          icon="STAT ICON: document/package"
          muted={!hasActivity}
        />
        <StatCard
          label="Pending Offers"
          value={String(data.stats.pendingOffers.value).padStart(2, "0")}
          delta={data.stats.pendingOffers.delta}
          icon="STAT ICON: clipboard/offer"
          muted={!hasActivity}
        />
        <StatCard
          label="Total Earnings"
          value={
            hasActivity
              ? `$${data.stats.totalEarnings.value.toLocaleString()}`
              : String(data.stats.totalEarnings.value).padStart(2, "0")
          }
          delta={data.stats.totalEarnings.delta}
          icon="STAT ICON: dollar sign"
          muted={!hasActivity}
        />
      </div>

      {!hasActivity ? (
        <div className="mt-6">
          <EmptyActivityCard onBrowse={() => {}} />
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <PerformanceMetrics data={data.performance} />
            <FleetStatus data={data.fleet} onManageFleet={() => {}} />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentActivity groups={data.recentActivity} onViewAll={() => {}} />
            </div>
            <MiniStatsGrid data={data.miniStats} />
          </div>

          <div className="mt-4">
            <ShipmentsTable shipments={data.shipments} onViewAll={() => {}} />
          </div>
        </>
      )}
    </DashboardLayout>
  );
}