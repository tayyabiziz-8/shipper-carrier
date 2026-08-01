import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import AuthCardLayout from "../layouts/AuthCardLayout";
import BrandMark from "./BrandMark";
import IconBadge from "./IconBadge";
import OtpInput from "./OtpInput";

const RESEND_COOLDOWN = 30;

export default function VerificationScreen({
  icon,
  title,
  description,
  destinationLabel,
  verifyLabel,
  onVerify,
  onResend,
}) {
  const [error, setError] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [code, setCode] = useState("");

  const startCooldown = () => {
    setCooldown(RESEND_COOLDOWN);
    const interval = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  const handleComplete = async (code) => {
    setVerifying(true);
    try {
      await onVerify(code);
    } catch (err) {
      setError(true);
      setResetKey((k) => k + 1);
      toast.error(err?.message || "Invalid code, please try again");
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    try {
      await onResend?.();
      toast.success("A new code has been sent");
      startCooldown();
    } catch (err) {
      toast.error(err?.message || "Couldn't resend code");
    }
  };

  return (
    <AuthCardLayout>
      <div className="flex flex-col items-center text-center">
        <BrandMark showIcon={false} className="mb-2" />
        <IconBadge icon={icon} />
        <h2 className="mt-5 text-2xl font-extrabold text-ink-900">{title}</h2>
        <p className="mt-2 text-sm text-ink-500">{description}</p>
        {destinationLabel && (
          <p className="mt-1 text-sm text-ink-700">
            We sent a verification code to <span className="font-semibold">{destinationLabel}</span>
          </p>
        )}
      </div>

      <div className="mt-6">
        <OtpInput
          onComplete={(val) => {
            setError(false);
            setCode(val);
          }}
          error={error}
          reset={resetKey}
        />
      </div>

      <button
        type="button"
        onClick={() => handleComplete(code)}
        disabled={verifying || code.length !== 6}
        className="mt-6 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {verifying ? "Verifying…" : verifyLabel}
      </button>

      <p className="mt-6 text-center text-sm text-ink-500">Didn't receive the code?</p>
      <button
        type="button"
        onClick={handleResend}
        disabled={cooldown > 0}
        className="mt-1 block w-full text-center text-sm font-semibold text-brand-600 underline hover:opacity-80 disabled:cursor-not-allowed disabled:text-ink-400 disabled:no-underline"
      >
        {cooldown > 0 ? `Resend Code (${cooldown}s)` : "Resend Code"}
      </button>
      <Link to="/login" className="mt-2 block text-center text-sm text-ink-500 hover:text-ink-700">
        Back to Sign In
      </Link>
    </AuthCardLayout>
  );
}
