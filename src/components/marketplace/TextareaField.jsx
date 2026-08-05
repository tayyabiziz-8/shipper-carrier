import { useField } from "formik";

export default function TextareaField({ label, ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium text-ink-900">
          {label}
        </label>
      )}
      <textarea
        {...field}
        {...props}
        id={props.id || props.name}
        rows={props.rows || 4}
        className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:[#019E59] focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
          hasError ? "border-red-400" : "border-gray-200"
        }`}
      />
      {hasError && <p className="text-xs text-red-500">{meta.error}</p>}
    </div>
  );
}