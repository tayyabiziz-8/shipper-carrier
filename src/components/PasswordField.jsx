import { useState } from "react";
import { useField } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordField({ label, placeholder = "Enter Password", ...props }) {
  const [field, meta] = useField(props);
  const [visible, setVisible] = useState(false);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium text-ink-900">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...field}
          {...props}
          id={props.id || props.name}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          className={`w-full rounded-lg border bg-white px-4 py-2.5 pr-11 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
            hasError ? "border-red-400" : "border-gray-200"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
        >
          {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
        </button>
      </div>
      {hasError && <p className="text-xs text-red-500">{meta.error}</p>}
    </div>
  );
}
