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
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}