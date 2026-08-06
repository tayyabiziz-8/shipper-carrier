import { NavLink } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import RvHookupRoundedIcon from "@mui/icons-material/RvHookupRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import BrandMark from "../BrandMark";

const GENERAL_ITEMS = [
  { label: "Dashboard", to: "/carrier/dashboard", Icon: GridViewRoundedIcon },
  { label: "Load Marketplace", to: "/carrier/marketplace", Icon: StorefrontRoundedIcon },
  { label: "Saved Loads", to: "/carrier/saved-loads", Icon: BookmarkRoundedIcon },
  { label: "My Offers", to: "/carrier/offers", Icon: DescriptionRoundedIcon },
  { label: "Shipments", to: "/carrier/shipments", Icon: Inventory2RoundedIcon },
];

const FLEET_ITEMS = [
  { label: "Overview", to: "/carrier/fleet", Icon: DonutLargeRoundedIcon, end: true },
  { label: "Trucks", to: "/carrier/fleet/trucks", Icon: LocalShippingRoundedIcon },
  { label: "Trailers", to: "/carrier/fleet/trailers", Icon: RvHookupRoundedIcon },
  { label: "Drivers", to: "/carrier/fleet/drivers", Icon: BadgeRoundedIcon },
];

const FOOTER_ITEMS = [
  { label: "Documents", to: "/carrier/documents", Icon: FolderRoundedIcon },
  { label: "Earnings", to: "/carrier/earnings", Icon: PaidRoundedIcon },
  { label: "Vetting Status", to: "/carrier/vetting", Icon: VerifiedRoundedIcon },
];

function NavItem({ label, to, Icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "border-l-2 border-brand-500 bg-white/10 pl-[10px] text-white"
            : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
        }`
      }
    >
      <Icon fontSize="small" />
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
    <aside className="scrollbar-hide sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-y-auto bg-[#0b0f19] px-3 pb-8 lg:flex">
      <div className="px-7 pt-4">
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

      <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-5">
        {FOOTER_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
}