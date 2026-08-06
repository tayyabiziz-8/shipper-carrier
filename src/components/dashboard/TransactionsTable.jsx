import { useState } from "react";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

import Pagination from "../marketplace/Pagination";

export default function TransactionsTable({ transactions }) {
  const [page, setPage] = useState(1);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-ink-900">Transaction</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-ink-700 hover:border-gray-300"
          >
            This Monthly
            <KeyboardArrowDownRoundedIcon fontSize="small" className="text-ink-400" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#019E59] px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
          >
            <FileDownloadRoundedIcon fontSize="small" />
            Export
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-ink-400">
              <th className="border-b border-gray-100 pb-3 font-semibold">Shipment #</th>
              <th className="border-b border-gray-100 pb-3 font-semibold">Route</th>
              <th className="border-b border-gray-100 pb-3 text-right font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-3 font-semibold text-ink-900">{t.id}</td>
                <td className="py-3">
                  <p className="flex items-center gap-1.5 text-ink-700">
                    {t.from}
                    <ArrowRightAltRoundedIcon fontSize="small" className="text-brand-500" />
                    {t.to}
                  </p>
                  <p className="text-xs text-ink-400">Delivered {t.delivered}</p>
                </td>
                <td className="py-3 text-right font-bold text-ink-900">{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-ink-500">
        <span>
          Showing 1-{transactions.length} of {transactions.length} transactions
        </span>
      </div>
      <Pagination page={page} totalPages={3} onPageChange={setPage} />
    </div>
  );
}