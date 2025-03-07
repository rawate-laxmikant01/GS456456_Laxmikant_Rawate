import { Planning } from "@/types/planning";

export const planningData: Planning[] = [
  {
    id: "1",
    store: "Nashville Melody Music Store",
    sku: "Rugged Utility Jacket",
    week01: {
      salesUnits: 200,
      salesDollars: 8998.0,
      gmDollars: 8512.0,
      gmPercent: 94.6,
    },
    week02: {
      salesUnits: 0,
      salesDollars: 0.0,
      gmDollars: 8512.0,
      gmPercent: 94.6,
    },
  },
  {
    id: "2",
    store: "Chicago Charm Boutique",
    sku: "Floral Chiffon Wrap Dress",
    week01: {
      salesUnits: 200,
      salesDollars: 29998.0,
      gmDollars: 27689.6,
      gmPercent: 54.3,
    },
    week02: {
      salesUnits: 0,
      salesDollars: 0.0,
      gmDollars: 27689.6,
      gmPercent: 54.3,
    },
  },
  {
    id: "3",
    store: "Miami Breeze Apparel",
    sku: "Lace-Up Combat Boots",
    week01: {
      salesUnits: 199,
      salesDollars: 4973.01,
      gmDollars: 31.95,
      gmPercent: 0.6,
    },
    week02: {
      salesUnits: 14,
      salesDollars: 349.86,
      gmDollars: 31.95,
      gmPercent: 0.6,
    },
  },
];

export default planningData;
