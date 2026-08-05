import { useField } from "formik";

export default function OfferAmountField({ label = "Your Offer Amount *", ...props }) {
  const [field, meta, helpers] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="rounded-lg bg-gray-50 px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={props.id || props.name} className="text-sm text-ink-500">
          {label}
        </label>
        <div className="flex items-center gap-1">
          <span className="text-xl font-extrabold text-[#019E59]">$</span>
          <input
            {...props}
            id={props.id || props.name}
            type="number"
            step="0.01"
            min="0"
            value={field.value}
            onChange={(e) => helpers.setValue(e.target.value)}
            onBlur={field.onBlur}
            className="w-32 bg-transparent text-right text-xl font-extrabold text-[#019E59] focus:outline-none"
          />
        </div>
      </div>
      {hasError && <p className="mt-1 text-right text-xs text-red-500">{meta.error}</p>}
    </div>
  );
}