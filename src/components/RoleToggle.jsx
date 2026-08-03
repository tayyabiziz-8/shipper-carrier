export default function RoleToggle({ value, onChange }) {
  const options = [
    { key: "shipper", label: "Shipper" },
    { key: "carrier", label: "Carrier" },
  ];

  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1">
      {options.map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active ? "bg-brand-600 text-white shadow-sm" : "text-ink-500 hover:text-ink-700"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}