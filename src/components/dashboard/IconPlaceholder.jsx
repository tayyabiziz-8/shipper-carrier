/**
 * Stand-in for an icon or small image asset that hasn't been sourced yet.
 * Renders a neutral placeholder box sized to fit the layout; swap the
 * usage site for a real <img>/<Icon> once you have the asset.
 *
 * ICON SOURCE NEEDED: pass a `label` describing what belongs here.
 */
export default function IconPlaceholder({ label = "ICON", size = 20, rounded = "rounded", className = "" }) {
  return (
    <span
      title={`ICON SOURCE NEEDED: ${label}`}
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center border border-dashed border-gray-300 bg-gray-100 text-gray-300 ${rounded} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* ICON SOURCE NEEDED: {label} */}
    </span>
  );
}