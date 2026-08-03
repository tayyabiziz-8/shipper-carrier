import titleImg from "../assets/title_img.png";

export default function BrandMark({
  size = 125,
  showWordmark = true,
  showIcon = true,
  light = false,
  className = "",
})
{
  return (
    <div className={`flex flex-col justify-start gap-3 ${className}`}>
      {showWordmark && (
        <span
          className={`text-sm font-bold tracking-tight ${light ? "text-white" : "text-ink-900"}`}
        >
          shippermeetcarrier.com
        </span>
      )}
      {showIcon && (
        <img
          src={titleImg}
          alt="shippermeetcarrier.com"
          className="ml-5 h-auto w-full shrink-0"
          style={{ maxWidth: size }}
        />
      )}
    </div>
  );
}