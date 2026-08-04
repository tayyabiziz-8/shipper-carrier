import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function Topbar({ user }) {
  return (
    <header className="flex h-[73px] shrink-0 items-center justify-between border-b border-gray-100 bg-white px-6">
      <div className="flex items-center gap-4">
        <button type="button" aria-label="Toggle sidebar" className="text-ink-500 lg:hidden">
          <MenuRoundedIcon />
        </button>
        <div className="flex w-72 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
          <SearchRoundedIcon fontSize="small" className="text-ink-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
          <AccountBalanceWalletRoundedIcon fontSize="small" className="text-[#3C82F5]" />
          <span className="text-sm text-ink-500">Credit Balance:</span>
          <span className="text-sm font-bold text-ink-900">
            ${user.creditBalance.toLocaleString()}
          </span>
        </div>

        <button type="button" aria-label="Settings" className="text-ink-500 hover:text-ink-900">
          <SettingsRoundedIcon fontSize="small" />
        </button>

        <button type="button" aria-label="Messages" className="relative text-ink-500 hover:text-ink-900">
          <ChatBubbleOutlineRoundedIcon fontSize="small" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            2
          </span>
        </button>

        <button type="button" aria-label="Notifications" className="relative text-ink-500 hover:text-ink-900">
          <NotificationsNoneRoundedIcon fontSize="small" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            1
          </span>
        </button>

        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
          <AccountCircleRoundedIcon className="text-gray-300" sx={{ fontSize: 36 }} />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink-900">{user.name}</p>
            <p className="text-xs text-ink-500">{user.company}</p>
          </div>
          <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
        </div>
      </div>
    </header>
  );
}