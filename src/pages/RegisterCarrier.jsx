import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "sonner";

import AuthSplitLayout from "../layouts/AuthSplitLayout";
import BrandMark from "../components/BrandMark";
import TextField from "../components/TextField";
import StateField from "../components/StateField";
import PasswordField from "../components/PasswordField";
import PasswordStrengthBar from "../components/PasswordStrengthBar";

const schema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  businessName: Yup.string().required("Business name is required"),
  mcNumber: Yup.string().required("MC number is required"),
  password: Yup.string().min(8, "At least 8 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  street: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code")
    .required("ZIP code is required"),
  marketingOptIn: Yup.boolean(),
});

export default function RegisterCarrier() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: await api.post("/auth/register/carrier", values)
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Account created. Check your email to verify");
      navigate("/verify-email");
    } catch (err) {
      toast.error(err?.message || "Couldn't create account");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthSplitLayout
      heroTitle="Register as a Carrier"
      heroSubtitle="Join our growing network of carriers. Browse loads, negotiate rates, and grow your trucking business with steady freight."
      bullets={[
        "Browse thousands of available loads",
        "Competitive and transparent rates",
        "Fast and guaranteed payments",
        "Fleet management tools",
      ]}
    >
      <h2 className="text-2xl font-extrabold text-ink-900">Create Carrier Account</h2>
      <p className="mt-1 text-sm text-ink-500">Fill in your business details to get started</p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          businessName: "",
          mcNumber: "",
          password: "",
          confirmPassword: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          marketingOptIn: true,
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="mt-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <TextField name="firstName" label="First Name" placeholder="First name" />
              <TextField name="lastName" label="Last Name" placeholder="Last name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextField name="email" label="Email Address" placeholder="Enter email" type="email" />
              <TextField name="phone" label="Phone" placeholder="Enter phone number" type="tel" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextField name="businessName" label="Business Name" placeholder="Enter business name" />
              <TextField name="mcNumber" label="MC Number" placeholder="Enter MC number" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <PasswordField name="password" label="Password" />
                <PasswordStrengthBar password={values.password} />
              </div>
              <PasswordField name="confirmPassword" label="Confirm Password" />
            </div>

            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
              Business Address
            </p>
            <TextField name="street" label="Street Address *" placeholder="Street address" />
            <div className="grid grid-cols-3 gap-4">
              <TextField name="city" label="City *" placeholder="City" />
              <StateField name="state" label="State *" />
              <TextField name="zip" label="ZIP Code *" placeholder="ZIP code" />
            </div>

            <label className="flex items-start gap-2 text-sm text-ink-700">
              <Checkbox
                size="small" checked={values.marketingOptIn}
                onChange={(e) => setFieldValue("marketingOptIn", e.target.checked)}
                sx={{ p: 0, mt: "-2px" }}
              />
              Receive marketing updates, news, and exclusive offers.
            </label>

            <button
              type="submit" disabled={isSubmitting}
              className="mt-2 w-full rounded-lg bg-[#019E59] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
            >
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>

            <p className="text-center text-sm text-ink-500">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-[#019E59] underline">
                Sign In
              </Link>
            </p>
            <p className="text-center text-sm text-ink-500">
              Want to register as a shipper?{" "}
              <Link to="/register/shipper" className="font-semibold text-[#019E59] underline">
                Shipper Registration
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </AuthSplitLayout>
  );
}