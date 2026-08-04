import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import VerificationScreen from "../components/VerificationScreen";
import phoneIcon from "../assets/phone.png";

export default function VerifyPhone() {
  const navigate = useNavigate();
  // In a real app this comes from signup state / query params.
  const phone = "(555) 555-5555";

  const handleVerify = async (code) => {
    // TODO: await api.post("/auth/verify-phone", { code })
    await new Promise((resolve, reject) =>
      setTimeout(() => (code.length === 6 ? resolve() : reject(new Error("Invalid code"))), 600)
    );
    toast.success("Phone verified");
    navigate("/login");
  };

  const handleResend = async () => {
    // TODO: await api.post("/auth/resend-phone-code")
    await new Promise((r) => setTimeout(r, 400));
  };

  return (
    <VerificationScreen
      iconSrc={phoneIcon}
      title="Verify Your Phone"
      description="Enter the 6-digit code we sent to your phone"
      destinationLabel={phone}
      verifyLabel="Verify Phone"
      onVerify={handleVerify}
      onResend={handleResend}
    />
  );
}