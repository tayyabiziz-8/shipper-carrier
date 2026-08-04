export default function IconBadge({ src, alt = "" }) {
  return <img src={src} alt={alt} className="mx-auto w-140 max-w-full" />;
}