export default function AuthCardLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-card">{children}</div>
    </div>
  );
}