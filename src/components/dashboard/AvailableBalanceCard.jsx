import stripeLogo from "../../assets/stripe.png";

export default function AvailableBalanceCard({ amount, lastTransaction }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#0b0f19] p-6 text-white">
      <div>
        <h2 className="text-base font-bold">Available Balance</h2>
        <div className="mt-6 flex items-start justify-between">
          <p className="text-4xl font-extrabold">${amount.toLocaleString()}</p>
          <img src={stripeLogo} alt="Stripe" className="h-5 w-auto object-contain" />
        </div>
        <p className="mt-1 text-sm text-white/50">Ready to withdraw</p>
      </div>

      <div className="mt-8">
        <button
          type="button"
          className="w-full rounded-lg border border-brand-500 py-2.5 text-sm font-semibold text-brand-400 hover:bg-white/5"
        >
          Transfer Available Balance
        </button>
        {lastTransaction && (
          <p className="mt-3 text-center text-xs italic text-white/40">
            The last transaction of {lastTransaction} was successful.
          </p>
        )}
      </div>
    </div>
  );
}