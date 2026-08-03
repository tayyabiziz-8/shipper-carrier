import truckImg from "../assets/truck_img.png";

export default function AuthSplitLayout({
  heroTitle,
  heroSubtitle,
  bullets,
  brandTop,
  heroBrand,
  children,
}) 
{
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <div className="relative hidden w-[42%] min-w-[380px] overflow-hidden bg-[#0b0f19] lg:block">
        <img
          src={truckImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {heroBrand && (
          <div className="relative z-10 flex justify-center pt-8">{heroBrand}</div>
        )}
        <div className="relative z-10 flex h-full flex-col justify-end p-12 pb-16 ml-10">
          <h1 className="max-w-sm text-3xl font-semibold leading-tight text-[#D9FAE5]">
            {heroTitle}
          </h1>
          {heroSubtitle && (
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
              {heroSubtitle}
            </p>
          )}
          {bullets && (
            <ul className="mt-6 flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-gray-100">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600">
                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-white stroke-2">
                      <path d="M2 6l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-12">
        <div className="w-full max-w-md">
          {brandTop}
          {children}
        </div>
      </div>
    </div>
  );
}