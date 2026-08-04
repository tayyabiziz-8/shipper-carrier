import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

import AuthCardLayout from "../layouts/AuthCardLayout";
import BrandMark from "../components/BrandMark";
import IconBadge from "../components/IconBadge";
import OtpInput from "../components/OtpInput";
import lockIcon from "../assets/lock.png";

export default function TwoFactorAuth() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "carrier";

  const handleVerify = async () => {
    if (code.length !== 6) {
      setError(true);
      toast.error("Enter the full 6-digit code");
      return;
    }
    setVerifying(true);
    try {
      // TODO: await api.post("/auth/2fa/verify", { code })
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Identity verified");
      navigate(role === "carrier" ? "/carrier/dashboard" : "/dashboard");
    } catch (err) {
      setError(true);
      toast.error(err?.message || "Invalid code, please try again");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <AuthCardLayout>
      <div className="flex flex-col items-center text-center">
        <BrandMark showIcon={false} className="mb-2" />
        <IconBadge src={lockIcon} />
        <h2 className="mt-5 text-2xl font-extrabold text-ink-900">Two-Factor Authentication</h2>
        <p className="mt-2 text-sm text-ink-500">Verify your identity to complete sign in</p>
      </div>

      <p className="mt-6 text-center text-sm text-ink-500">
        Enter the 6-digit code from your authenticator app
      </p>

      <div className="mt-4">
        <OtpInput
          onComplete={(val) => {
            setCode(val);
            setError(false);
          }}
          error={error}
        />
      </div>

      <button
        type="button"
        onClick={handleVerify}
        disabled={verifying}
        className="mt-6 w-full rounded-lg bg-[#019E59] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
      >
        {verifying ? "Verifying…" : "Verify Code"}
      </button>

      <p className="mt-6 text-center text-sm text-ink-500">Lost access to your authenticator?</p>
      <Link
        to="/2fa/recovery"
        className="mt-1 block text-center text-sm font-semibold text-[#019E59] hover:underline"
      >
        Use a recovery code
      </Link>
      <Link to="/login" className="mt-2 block text-center text-sm text-ink-500 hover:text-ink-700">
        Back to Sign In
      </Link>
    </AuthCardLayout>
  );
}