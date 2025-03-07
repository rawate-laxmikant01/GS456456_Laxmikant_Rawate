export interface Planning {
  id: string;
  store: string;
  sku: string;
  week01: {
    salesUnits: number;
    salesDollars: number;
    gmDollars: number;
    gmPercent: number;
  };
  week02: {
    salesUnits: number;
    salesDollars: number;
    gmDollars: number;
    gmPercent: number;
  };
}

export interface PlanningState {
  items: Planning[];
  loading: boolean;
  error: string | null;
}
