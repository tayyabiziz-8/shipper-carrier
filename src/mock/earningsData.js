const sharedNotes = {
  totalEarnings: { note: "+$3,200 this week", period: "All-time" },
  pendingPayouts: { note: "EST. payout: Apr 2", period: "2 Shipments" },
  availableBalance: { note: "Ready to withdraw", period: "" },
  avgPerLoad: { note: "9 loads avg", period: "This month" },
};

export const emptyEarnings = {
  totalEarnings: { value: 0, ...sharedNotes.totalEarnings },
  pendingPayouts: { value: 0, ...sharedNotes.pendingPayouts },
  availableBalance: { value: 0, ...sharedNotes.availableBalance },
  avgPerLoad: { value: 0, ...sharedNotes.avgPerLoad },
};

export const activeEarnings = {
  totalEarnings: { value: 24850, ...sharedNotes.totalEarnings },
  pendingPayouts: { value: 6400, ...sharedNotes.pendingPayouts },
  availableBalance: { value: 2150, ...sharedNotes.availableBalance },
  avgPerLoad: { value: 2762, ...sharedNotes.avgPerLoad },
  lastTransaction: "$2,300.00",
  revenue: {
    range: "Monthly",
    highlightIndex: 8,
    points: [
      { label: "04 Jan", value: 32000 },
      { label: "05 Jan", value: 3000 },
      { label: "06 Jan", value: 38000 },
      { label: "07 Jan", value: 46000 },
      { label: "08 Jan", value: 20000 },
      { label: "09 Jan", value: 34000 },
      { label: "10 Jan", value: 40000 },
      { label: "11 Jan", value: 22000 },
      { label: "12 Jan", value: 49000 },
      { label: "13 Jan", value: 14000 },
    ],
  },
  pendingPayoutsList: Array.from({ length: 4 }).map(() => ({
    id: "SHP-2024-0892",
    status: "Processing",
    from: "Dallas, TX",
    to: "Chicago, IL",
    delivered: "Mar 27",
    amount: "$2,600",
    payoutDate: "Apr 2, 2026",
  })),
  transactions: Array.from({ length: 8 }).map(() => ({
    id: "SHP-2024-0892",
    from: "Dallas, TX",
    to: "Chicago, IL",
    delivered: "Mar 27",
    amount: "$2,600",
  })),
};