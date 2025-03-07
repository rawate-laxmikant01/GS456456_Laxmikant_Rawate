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

export type PlanningEntry = {
  store: string;
  sku: string;
  week: string;
  salesUnits: number;
};

export type CalculationEntry = {
  store: string;
  sku: string;
  week: string;
  salesUnits: number;
  salesDollars: number;
  gmPercent: number;
};

export type RowData = {
  store: string;
  sku: string;
} & {
  [key: string]: string | number;
};


export interface PlanningState {
  items: PlanningEntry[];
  loading: boolean;
  error: string | null;
}
