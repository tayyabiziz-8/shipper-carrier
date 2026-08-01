import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "sonner";

import AuthSplitLayout from "../layouts/AuthSplitLayout";
import BrandMark from "../components/BrandMark";
import RoleToggle from "../components/RoleToggle";
import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";

const schema = Yup.object({
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [role, setRole] = useState("carrier");
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Signed in successfully");
      navigate("/2fa");
    } catch (err) {
      toast.error(err?.message || "Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthSplitLayout
      heroTitle="Connecting Shippers and Carriers Nationwide"
      heroSubtitle="Efficient, Trusted, Professional Logistics Solutions. Log in to manage your shipments, track loads, and grow your business."
      brandTop={<BrandMark className="mb-6" />}
    >
      <h2 className="text-2xl font-extrabold text-ink-900">Welcome Back</h2>

      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="mt-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-700">Sign in to your account:</span>
              <RoleToggle value={role} onChange={setRole} />
            </div>

            <TextField name="email" label="Email Address" placeholder="Enter email" type="email" />
            <PasswordField name="password" label="Password" />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-ink-700">
                <Checkbox
                  size="small"
                  checked={values.rememberMe}
                  onChange={(e) => setFieldValue("rememberMe", e.target.checked)}
                  sx={{ p: 0 }}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-brand-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
            >
              {isSubmitting ? "Signing in…" : "Continue"}
            </button>

            <p className="text-center text-sm text-ink-500">Don't have an account?</p>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/register/shipper"
                className="rounded-lg border border-brand-600 py-2.5 text-center text-sm font-semibold text-brand-600 hover:bg-brand-50"
              >
                Register as Shipper
              </Link>
              <Link
                to="/register/carrier"
                className="rounded-lg border border-brand-600 py-2.5 text-center text-sm font-semibold text-brand-600 hover:bg-brand-50"
              >
                Register as Carrier
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthSplitLayout>
  );
}
