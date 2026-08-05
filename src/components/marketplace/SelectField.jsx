import { useField } from "formik";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function SelectField({ label, options, placeholder = "Select…", ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium text-ink-900">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          {...field}
          {...props}
          id={props.id || props.name}
          className={`w-full appearance-none rounded-lg border bg-white px-4 py-2.5 pr-10 text-sm focus:border-[#019E59] focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
            field.value ? "text-ink-900" : "text-ink-400"
          } ${hasError ? "border-red-400" : "border-gray-200"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id} className="text-ink-900">
              {opt.label}
            </option>
          ))}
        </select>
        <KeyboardArrowDownRoundedIcon
          fontSize="small"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400"
        />
      </div>
      {hasError && <p className="text-xs text-red-500">{meta.error}</p>}
    </div>
  );
}