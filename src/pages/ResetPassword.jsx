import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import VpnKeyIcon from "@mui/icons-material/VpnKeyRounded";
import WarningAmberIcon from "@mui/icons-material/WarningAmberRounded";
import { toast } from "sonner";

import AuthCardLayout from "../layouts/AuthCardLayout";
import BrandMark from "../components/BrandMark";
import IconBadge from "../components/IconBadge";
import PasswordField from "../components/PasswordField";
import PasswordStrengthBar from "../components/PasswordStrengthBar";

const schema = Yup.object({
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  // A missing/expired token renders the invalid-link state (screenshot 9).
  const [isValidLink] = useState(Boolean(token));

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: await api.post("/auth/reset-password", { token, password: values.password })
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Password reset successfully");
      navigate("/login");
    } catch (err) {
      toast.error(err?.message || "Couldn't reset password");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isValidLink) {
    return (
      <AuthCardLayout>
        <div className="flex flex-col items-center text-center">
          <BrandMark showIcon={false} className="mb-2" />
          <IconBadge icon={VpnKeyIcon} />
          <h2 className="mt-5 text-2xl font-extrabold text-ink-900">Reset Your Password</h2>
          <p className="mt-2 text-sm text-ink-500">Enter your new password below</p>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-lg bg-gray-50 p-4">
          <WarningAmberIcon className="mt-0.5 !text-xl text-amber-500" />
          <div>
            <p className="text-sm font-semibold text-ink-900">Invalid Reset Link</p>
            <p className="mt-0.5 text-sm text-ink-500">
              This password reset link is invalid or has expired. Please request a new one.
            </p>
          </div>
        </div>

        <Link
          to="/forgot-password"
          className="mt-6 block w-full rounded-lg bg-brand-600 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Request New Link
        </Link>

        <Link
          to="/login"
          className="mt-4 block text-center text-sm text-ink-500 hover:text-ink-700"
        >
          Back to Sign In
        </Link>
      </AuthCardLayout>
    );
  }

  return (
    <AuthCardLayout>
      <div className="flex flex-col items-center text-center">
        <BrandMark showIcon={false} className="mb-2" />
        <IconBadge icon={VpnKeyIcon} />
        <h2 className="mt-5 text-2xl font-extrabold text-ink-900">Reset Your Password</h2>
        <p className="mt-2 text-sm text-ink-500">Enter your new password below</p>
      </div>

      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <PasswordField name="password" label="New Password" />
              <PasswordStrengthBar password={values.password} />
            </div>
            <PasswordField name="confirmPassword" label="Confirm Password" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
            >
              {isSubmitting ? "Resetting…" : "Reset Password"}
            </button>
          </Form>
        )}
      </Formik>

      <Link to="/login" className="mt-6 block text-center text-sm text-ink-500 hover:text-ink-700">
        Back to Sign In
      </Link>
    </AuthCardLayout>
  );
}
