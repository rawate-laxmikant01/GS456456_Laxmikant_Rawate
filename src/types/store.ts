export interface Store {
  seqNo: number;
  id: string;
  label: string;
  city: string;
  state: string;
}

export interface StoreState {
  items: Store[];
  loading: boolean;
  error: string | null;
}