import { NavLink } from "react-router-dom";
import BrandMark from "../BrandMark";
import IconPlaceholder from "./IconPlaceholder";

const GENERAL_ITEMS = [
  { label: "Dashboard", to: "/carrier/dashboard", icon: "SIDEBAR ICON: grid/dashboard" },
  { label: "Load Marketplace", to: "/carrier/marketplace", icon: "SIDEBAR ICON: document/marketplace" },
  { label: "Saved Loads", to: "/carrier/saved-loads", icon: "SIDEBAR ICON: bookmark" },
  { label: "My Offers", to: "/carrier/offers", icon: "SIDEBAR ICON: list/offers" },
  { label: "Shipments", to: "/carrier/shipments", icon: "SIDEBAR ICON: truck/shipments" },
];

const FLEET_ITEMS = [
  { label: "Overview", to: "/carrier/fleet", icon: "SIDEBAR ICON: search/overview" },
  { label: "Trucks", to: "/carrier/fleet/trucks", icon: "SIDEBAR ICON: truck" },
  { label: "Trailers", to: "/carrier/fleet/trailers", icon: "SIDEBAR ICON: trailer" },
  { label: "Drivers", to: "/carrier/fleet/drivers", icon: "SIDEBAR ICON: driver/person" },
];

const FOOTER_ITEMS = [
  { label: "Documents", to: "/carrier/documents", icon: "SIDEBAR ICON: document stack" },
  { label: "Earnings", to: "/carrier/earnings", icon: "SIDEBAR ICON: dollar/earnings" },
  { label: "Vetting Status", to: "/carrier/vetting", icon: "SIDEBAR ICON: shield/vetting" },
];

function NavItem({ label, to, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "bg-white/10 text-white border-l-2 border-brand-500 -ml-px pl-[11px]"
            : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
        }`
      }
    >
      <IconPlaceholder label={icon} size={18} className="border-gray-600 bg-white/5 text-gray-500" />
      {label}
    </NavLink>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="px-3 pb-2 pt-5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
      {children}
    </p>
  );
}

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-60 shrink-0 flex-col overflow-y-auto bg-[#0b0f19] px-3 pb-8 lg:flex">
      <div className="px-2 pb-6 pt-8">
        <BrandMark light size={110} />
      </div>

      <SectionLabel>General</SectionLabel>
      <nav className="flex flex-col gap-1">
        {GENERAL_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <SectionLabel>Fleet</SectionLabel>
      <nav className="flex flex-col gap-1">
        {FLEET_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-5 flex flex-col gap-1 border-t border-white/10 pt-5">
        {FOOTER_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
}