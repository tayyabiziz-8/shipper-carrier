import MaskedInfoRow from "./MaskedInfoRow";

export default function LocationCard({ title, location }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
      <h3 className="text-base font-bold text-ink-900">{title}</h3>
      <p className="mt-3 font-bold text-ink-900">{location.city}</p>

      <div className="mt-3 flex flex-col gap-2">
        <MaskedInfoRow>Exact facility address revealed after Rate Confirmation signed</MaskedInfoRow>
        <MaskedInfoRow>Contact details revealed after signing</MaskedInfoRow>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-xs uppercase tracking-wide text-ink-400">Hours</span>
          <span className="font-semibold text-ink-900">{location.hours}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs uppercase tracking-wide text-ink-400">Dock Type</span>
          <span className="font-semibold text-ink-900">{location.dockType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs uppercase tracking-wide text-ink-400">Appointment</span>
          <span className="font-semibold text-[#019E59]">{location.appointment}</span>
        </div>
      </div>
    </div>
  );
}