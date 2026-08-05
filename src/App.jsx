import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import RegisterCarrier from "./pages/RegisterCarrier";
import RegisterShipper from "./pages/RegisterShipper";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyPhone from "./pages/VerifyPhone";
import Dashboard from "./pages/Dashboard";
import CarrierDashboard from "./pages/dashboard/CarrierDashboard";
import LoadMarketplace from "./pages/dashboard/LoadMarketplace";
import LoadDetail from "./pages/dashboard/LoadDetail";
import ComingSoon from "./pages/dashboard/ComingSoon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register/carrier" element={<RegisterCarrier />} />
      <Route path="/register/shipper" element={<RegisterShipper />} />
      <Route path="/2fa" element={<TwoFactorAuth />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-phone" element={<VerifyPhone />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/carrier/dashboard" element={<CarrierDashboard />} />
      <Route path="/carrier/marketplace" element={<LoadMarketplace />} />
      <Route path="/carrier/marketplace/:loadId" element={<LoadDetail />} />
      <Route path="/carrier/saved-loads" element={<ComingSoon title="Saved Loads" />} />
      <Route path="/carrier/offers" element={<ComingSoon title="My Offers" />} />
      <Route path="/carrier/shipments" element={<ComingSoon title="Shipments" />} />
      <Route path="/carrier/fleet" element={<ComingSoon title="Fleet Overview" />} />
      <Route path="/carrier/fleet/trucks" element={<ComingSoon title="Trucks" />} />
      <Route path="/carrier/fleet/trailers" element={<ComingSoon title="Trailers" />} />
      <Route path="/carrier/fleet/drivers" element={<ComingSoon title="Drivers" />} />
      <Route path="/carrier/documents" element={<ComingSoon title="Documents" />} />
      <Route path="/carrier/earnings" element={<ComingSoon title="Earnings" />} />
      <Route path="/carrier/vetting" element={<ComingSoon title="Vetting Status" />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}