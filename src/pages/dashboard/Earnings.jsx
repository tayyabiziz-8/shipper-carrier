import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import DashboardLayout from "../../layouts/DashboardLayout";
import RevenueChart from "../../components/dashboard/RevenueChart";
import AvailableBalanceCard from "../../components/dashboard/AvailableBalanceCard";
import PendingPayoutsCard from "../../components/dashboard/PendingPayoutsCard";
import TransactionsTable from "../../components/dashboard/TransactionsTable";
import { mockUsers } from "../../mock/dashboardData";
import { emptyEarnings, activeEarnings } from "../../mock/earningsData";
import emptyChartIcon from "../../assets/emptychart.png";

function EarningsStatCard({ label, value, note, period, icon: Icon, muted }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            muted ? "bg-gray-100 text-gray-300" : "bg-brand-50 text-[#019E59]"
          }`}
        >
          <Icon fontSize="small" />
        </span>
      </div>
      <p className={`mt-3 text-3xl font-extrabold ${muted ? "text-gray-300" : "text-ink-900"}`}>
        {value}
      </p>
      <div className="mt-2 flex items-center justify-between text-xs text-ink-500">
        <span>{note}</span>
        <span>{period}</span>
      </div>
    </div>
  );
}

export default function Earnings() {
  const navigate = useNavigate();
  const [hasEarnings, setHasEarnings] = useState(true);
  const data = hasEarnings ? activeEarnings : emptyEarnings;
  const user = mockUsers.carrier;

  return (
    <DashboardLayout user={user}>
      {/* DEV-ONLY STATE TOGGLE */}
      <div className="mb-4 flex justify-end">
        <div className="inline-flex rounded-full bg-gray-100 p-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setHasEarnings(false)}
            className={`rounded-full px-3 py-1 ${!hasEarnings ? "bg-white shadow-sm" : "text-ink-500"}`}
          >
            Empty state
          </button>
          <button
            type="button"
            onClick={() => setHasEarnings(true)}
            className={`rounded-full px-3 py-1 ${hasEarnings ? "bg-white shadow-sm" : "text-ink-500"}`}
          >
            Active carrier
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-extrabold text-ink-900">Earnings</h1>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-[#019E59] px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          <FileDownloadRoundedIcon fontSize="small" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <EarningsStatCard
          label="Total Earnings"
          value={hasEarnings ? `$${data.totalEarnings.value.toLocaleString()}` : "00"}
          note={data.totalEarnings.note}
          period={data.totalEarnings.period}
          icon={PaidRoundedIcon}
          muted={!hasEarnings}
        />
        <EarningsStatCard
          label="Pending Payouts"
          value={hasEarnings ? `$${data.pendingPayouts.value.toLocaleString()}` : "00"}
          note={data.pendingPayouts.note}
          period={data.pendingPayouts.period}
          icon={PendingActionsRoundedIcon}
          muted={!hasEarnings}
        />
        <EarningsStatCard
          label="Available Balance"
          value={hasEarnings ? `$${data.availableBalance.value.toLocaleString()}` : "00"}
          note={data.availableBalance.note}
          period={data.availableBalance.period}
          icon={TrendingUpRoundedIcon}
          muted={!hasEarnings}
        />
        <EarningsStatCard
          label="Avg Per Load"
          value={hasEarnings ? `$${data.avgPerLoad.value.toLocaleString()}` : "00"}
          note={data.avgPerLoad.note}
          period={data.avgPerLoad.period}
          icon={ReceiptLongRoundedIcon}
          muted={!hasEarnings}
        />
      </div>

      {!hasEarnings ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-20 text-center shadow-card">
          <img src={emptyChartIcon} alt="" className="h-50 w-55" />
          <p className="mt-4 text-ink-500">Complete your first shipment to start earning.</p>
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
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RevenueChart
                points={data.revenue.points}
                highlightIndex={data.revenue.highlightIndex}
                range={data.revenue.range}
              />
            </div>
            <AvailableBalanceCard
              amount={data.availableBalance.value}
              lastTransaction={data.lastTransaction}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <PendingPayoutsCard items={data.pendingPayoutsList} />
            <div className="lg:col-span-2">
              <TransactionsTable transactions={data.transactions} />
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}