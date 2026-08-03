import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import VpnKeyIcon from "@mui/icons-material/VpnKeyRounded";
import { toast } from "sonner";
import { useState } from "react";

import AuthCardLayout from "../layouts/AuthCardLayout";
import BrandMark from "../components/BrandMark";
import IconBadge from "../components/IconBadge";
import TextField from "../components/TextField";

const schema = Yup.object({
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
});

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: await api.post("/auth/forgot-password", values)
      await new Promise((r) => setTimeout(r, 600));
      setSent(true);
      toast.success(`Reset link sent to ${values.email}`);
    } catch (err) {
      toast.error(err?.message || "Couldn't send reset link");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthCardLayout>
      <div className="flex flex-col items-center text-center">
        <BrandMark showIcon={false} className="mb-2" />
        <IconBadge icon={VpnKeyIcon} />
        <h2 className="mt-5 text-2xl font-extrabold text-ink-900">Forgot Password?</h2>
        <p className="mt-2 text-sm text-ink-500">
          {sent
            ? "Check your inbox for a link to reset your password."
            : "Enter your email address and we will send you a link to reset your password."}
        </p>
      </div>

      {!sent ? (
        <Formik initialValues={{ email: "" }} validationSchema={schema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="mt-6 flex flex-col gap-5">
              <TextField name="email" label="Email Address" placeholder="Enter email" type="email" />
              <button
                type="submit" disabled={isSubmitting}
                className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send Reset Link"}
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <button
          type="button" onClick={() => setSent(false)}
          className="mt-6 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Resend Link
        </button>
      )}

      <p className="mt-6 text-center text-sm text-ink-500">
        Back to{" "}
        <Link to="/login" className="font-semibold text-brand-600 hover:underline">
          Sign In
        </Link>
      </p>
    </AuthCardLayout>
  );
}