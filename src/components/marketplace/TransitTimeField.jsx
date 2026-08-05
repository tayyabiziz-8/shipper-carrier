import { useField } from "formik";

export default function TransitTimeField({ label, unit = "days", ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium text-ink-900">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        <input
          {...field}
          {...props}
          id={props.id || props.name}
          type="number"
          min="0"
          className={`w-20 rounded-lg border bg-white px-3 py-2.5 text-center text-sm text-ink-900 focus:border-[#019E59] focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
            hasError ? "border-red-400" : "border-gray-200"
          }`}
        />
        <span className="text-sm text-ink-500">{unit}</span>
      </div>
      {hasError && <p className="text-xs text-red-500">{meta.error}</p>}
    </div>
  );
}