import IconPlaceholder from "./IconPlaceholder";

export default function VerificationBanner({ stepLabel }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <IconPlaceholder label="ICON: warning triangle" size={18} className="mt-0.5 border-amber-300 bg-amber-100" />
      <div className="text-sm">
        <p className="font-semibold text-amber-900">Your account is pending verification.</p>
        <p className="text-amber-800">{stepLabel}</p>
        <button type="button" className="mt-1 font-semibold text-amber-900 underline hover:opacity-80">
          Complete Verification →
        </button>
      </div>
    </div>
  );
}