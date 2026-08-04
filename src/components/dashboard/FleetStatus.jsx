import trucksImg from "../../assets/trucks.png";
import trailersImg from "../../assets/trailers.png";
import driversImg from "../../assets/drivers.png";

const FLEET_CARDS = [
  { key: "trucks", label: "Trucks", img: trucksImg, extraRow: "Maint" },
  { key: "trailers", label: "Trailers", img: trailersImg, extraRow: "Maint" },
  { key: "drivers", label: "Drivers", img: driversImg, extraRow: null },
];

export default function FleetStatus({ data, onManageFleet }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-ink-900">Fleet Status</h3>
        <button
          type="button"
          onClick={onManageFleet}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-gray-50"
        >
          Manage Fleet
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {FLEET_CARDS.map((fleet) => {
          const stats = data[fleet.key];
          return (
            <div key={fleet.key} className="rounded-xl border border-gray-100 bg-gray-50 px-4 pb-3">
              <img src={fleet.img} alt={fleet.label} className="ml-9 h-22 w-22 object-contain" />
              <p className="mt-3 text-sm font-bold text-ink-900">{fleet.label}</p>
              <p className="text-xs text-ink-500">{stats.total} Total</p>

              <div className="mt-3 flex flex-col gap-1.5 border-t border-gray-200 pt-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-ink-500">Active</span>
                  <span className="font-semibold text-ink-900">{stats.active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Available</span>
                  <span className="font-semibold text-ink-900">{stats.available}</span>
                </div>
                {fleet.extraRow && (
                  <div className="flex justify-between">
                    <span className="text-ink-500">{fleet.extraRow}</span>
                    <span className="font-semibold text-ink-900">{stats.maint}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}