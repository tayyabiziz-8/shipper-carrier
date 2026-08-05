import LockRoundedIcon from "@mui/icons-material/LockRounded";

export default function MaskedInfoRow({ children }) {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2">
      <LockRoundedIcon sx={{ fontSize: 14 }} className="mt-0.5 shrink-0 text-amber-600" />
      <p className="text-xs text-amber-800">{children}</p>
    </div>
  );
}