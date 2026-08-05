export const mockLoads = Array.from({ length: 8 }).map((_, i) => ({
  id: "LD-4521",
  postedAgo: "1m ago",
  cargo: "Flatbed - Steel Coils",
  from: "Dallas, TX",
  to: "Chicago, IL",
  weight: "35,200 lbs",
  distance: "1,020 mi",
  equipment: ["FTL", "LTL", "PTL", "FTL", "FTL", "FTL", "FTL", "FTL"][i],
  price: 3200,
  priceLabel: "$3,200",
  pickupDate: "Mar 30, 2026",
  shipperRange: { min: 3200, max: 3800 },
}));

export const carrierFleetOptions = {
  trucks: [
    { id: "TRK-001", label: "TRK-001 (2022 Peterbilt 579)" },
    { id: "TRK-002", label: "TRK-002 (2021 Freightliner Cascadia)" },
    { id: "TRK-003", label: "TRK-003 (2023 Kenworth T680)" },
  ],
  trailers: [
    { id: "TRL-002", label: "TRL-002 (Flatbed 53 ft)" },
    { id: "TRL-003", label: "TRL-003 (Reefer 53 ft)" },
    { id: "TRL-004", label: "TRL-004 (Dry Van 48 ft)" },
  ],
  drivers: [
    { id: "DRV-01", label: "Mike Alvarez" },
    { id: "DRV-02", label: "Sarah Chen" },
    { id: "DRV-03", label: "James Okafor" },
  ],
};