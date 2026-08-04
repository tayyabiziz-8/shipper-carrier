import IconPlaceholder from "./IconPlaceholder";

export default function Topbar({ user }) {
  return (
    <header className="flex h-[73px] shrink-0 items-center justify-between border-b border-gray-100 bg-white px-6">
      <div className="flex items-center gap-4">
        <button type="button" aria-label="Toggle sidebar" className="lg:hidden">
          <IconPlaceholder label="TOPBAR ICON: hamburger menu" size={22} />
        </button>
        <div className="flex w-72 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
          <IconPlaceholder label="TOPBAR ICON: search" size={16} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
          <IconPlaceholder label="TOPBAR ICON: credit/wallet" size={16} />
          <span className="text-sm text-ink-500">Credit Balance:</span>
          <span className="text-sm font-bold text-ink-900">
            ${user.creditBalance.toLocaleString()}
          </span>
        </div>

        <button type="button" aria-label="Settings">
          <IconPlaceholder label="TOPBAR ICON: settings gear" size={20} />
        </button>

        <button type="button" aria-label="Messages" className="relative">
          <IconPlaceholder label="TOPBAR ICON: messages/chat" size={20} />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
            2
          </span>
        </button>

        <button type="button" aria-label="Notifications" className="relative">
          <IconPlaceholder label="TOPBAR ICON: notification bell" size={20} />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            1
          </span>
        </button>

        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
          <IconPlaceholder label="AVATAR: user profile photo" size={36} rounded="rounded-full" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink-900">{user.name}</p>
            <p className="text-xs text-ink-500">{user.company}</p>
          </div>
          <IconPlaceholder label="TOPBAR ICON: chevron down" size={14} />
        </div>
      </div>
    </header>
  );
}