import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sku } from "@/types/sku";
import { skus as initialSkus } from "@/data/skus_data";

interface SkuState {
  items: Sku[];
  loading: boolean;
  error: string | null;
}

const initialState: SkuState = {
  items: initialSkus,
  loading: false,
  error: null,
};

const skuSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    setSkus: (state, action: PayloadAction<Sku[]>) => {
      state.items = action.payload;
    },
    deleteSku: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((sku) => sku.id !== action.payload);
    },
    updateSkuOrder: (state, action: PayloadAction<Sku[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSkus, deleteSku, updateSkuOrder, setLoading, setError } =
  skuSlice.actions;

export default skuSlice.reducer;
