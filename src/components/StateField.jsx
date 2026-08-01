import { useField } from "formik";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

export default function StateField({ label, ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium text-ink-900">
          {label}
        </label>
      )}
      <select
        {...field}
        {...props}
        id={props.id || props.name}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
          field.value ? "text-ink-900" : "text-ink-400"
        } ${hasError ? "border-red-400" : "border-gray-200"}`}
      >
        <option value="" disabled>
          Select State
        </option>
        {US_STATES.map((s) => (
          <option key={s} value={s} className="text-ink-900">
            {s}
          </option>
        ))}
      </select>
      {hasError && <p className="text-xs text-red-500">{meta.error}</p>}
    </div>
  );
}
