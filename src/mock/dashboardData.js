// Mock data only, replace with real API responses.
// Two user types are stubbed (carrier + shipper) since both roles exist in
// the auth flow; only the carrier dashboard UI is built out for now.

export const mockUsers = {
  carrier: {
    name: "John D.",
    company: "ABC Trucking LLC",
    role: "carrier",
    creditBalance: 1550,
  },
  shipper: {
    name: "Maria S.",
    company: "Nordstream Retail Co.",
    role: "shipper",
    creditBalance: 4200,
  },
};

export const emptyCarrierDashboard = {
  verification: {
    pending: true,
    stepLabel: "Complete Step 3 of 6 to unlock all features.",
  },
  stats: {
    activeShipments: { value: 0, delta: "0 from last week" },
    availableLoads: { value: 0, delta: "0 match your profile" },
    pendingOffers: { value: 0, delta: "0 needs your response" },
    totalEarnings: { value: 0, delta: "0 this week" },
  },
};

export const activeCarrierDashboard = {
  verification: { pending: false },
  stats: {
    activeShipments: { value: 4, delta: "2 from last week" },
    availableLoads: { value: 127, delta: "14 match your profile" },
    pendingOffers: { value: 3, delta: "1 needs your response" },
    totalEarnings: { value: 24850, delta: "$3,200 this week" },
  },
  performance: {
    reliabilityScore: 91,
    onTimeDelivery: 94,
    acceptanceRate: 87,
    avgResponseHours: 1.2,
  },
  fleet: {
    trucks: { total: 8, active: 3, available: 2, maint: 1 },
    trailers: { total: 12, active: 7, available: 4, maint: 1 },
    drivers: { total: 6, active: 4, available: 2 },
  },
  recentActivity: [
    {
      group: "TODAY",
      items: [
        { type: "success", text: "Shipment #SHP-2024-0892 delivered successfully", time: "2 hours ago" },
        { type: "info", text: "New counter-offer on Load #LD-4521 ($3,400 → $3,200)", time: "2 hours ago" },
        { type: "warning", text: "Pickup confirmed for Shipment #SHP-2024-0891", time: "6 hours ago" },
      ],
    },
    {
      group: "YESTERDAY",
      items: [
        { type: "success", text: "Payment of $2,800.00 received for #SHP-2024-0889", time: "2 hours ago" },
        { type: "info", text: "Offer accepted on Load #LD-4498", time: "2 hours ago" },
        { type: "warning", text: "Offer declined on Load #LD-4472", time: "6 hours ago" },
      ],
    },
  ],
  miniStats: {
    canceledShipments: { value: 23, delta: "13%", direction: "up" },
    deliveredShipments: { value: 174, delta: "9%", direction: "down" },
    todayShipments: { value: 2, delta: "13%", direction: "up" },
    aiShipmentMatch: { value: 4, badge: "AI Suggestion" },
  },
  shipments: Array.from({ length: 4 }).map((_, i) => ({
    id: `SP-202492`,
    load: "LD-4498",
    from: "Dallas, TX",
    to: "Chicago, IL",
    cargo: "Reefer - Frozen Foods",
    equipment: "TRK-002 / TRL-003",
    progress: 65,
    status: ["In Transit", "Breakdown", "Pending", "In Transit"][i],
    escrow: "Escrow",
    pickup: "Mar 26, 2026",
    amount: "$3,800",
  })),
};