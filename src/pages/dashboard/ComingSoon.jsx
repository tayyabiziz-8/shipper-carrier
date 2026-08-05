import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";

import DashboardLayout from "../../layouts/DashboardLayout";
import { mockUsers } from "../../mock/dashboardData";

export default function ComingSoon({ title }) {
  const user = mockUsers.carrier;

  return (
    <DashboardLayout user={user}>
      <h1 className="mb-6 text-2xl font-extrabold text-ink-900">{title}</h1>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-24 text-center shadow-card">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
          <ConstructionRoundedIcon sx={{ fontSize: 28 }} className="text-gray-300" />
        </div>
        <h2 className="text-lg font-bold text-ink-900">{title} is coming soon</h2>
        <p className="mt-1 max-w-sm text-sm text-ink-500">
          This section hasn't been built out yet. The sidebar link works, but there's no page here
          yet.
        </p>
      </div>
    </DashboardLayout>
  );
}