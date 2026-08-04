import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import VerificationScreen from "../components/VerificationScreen";
import letterIcon from "../assets/letter.png";

export default function VerifyEmail() {
  const navigate = useNavigate();
  // In a real app this comes from signup state / query params.
  const email = "john@example.com";

  const handleVerify = async (code) => {
    // TODO: await api.post("/auth/verify-email", { code })
    await new Promise((resolve, reject) =>
      setTimeout(() => (code.length === 6 ? resolve() : reject(new Error("Invalid code"))), 600)
    );
    toast.success("Email verified");
    navigate("/login");
  };

  const handleResend = async () => {
    // TODO: await api.post("/auth/resend-email-code")
    await new Promise((r) => setTimeout(r, 400));
  };

  return (
    <VerificationScreen
      iconSrc={letterIcon}
      title="Verify Your Email"
      description="Enter the 6-digit code we sent to your email"
      destinationLabel={email}
      verifyLabel="Verify Code"
      onVerify={handleVerify}
      onResend={handleResend}
    />
  );
}