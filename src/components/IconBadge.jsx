export default function IconBadge({ icon: Icon }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 shadow-card">
      <Icon className="!text-3xl text-white" />
    </div>
  );
}
