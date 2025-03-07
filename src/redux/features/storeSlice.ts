import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store, StoreState } from "@/types/store";
import { stores as initialStores } from "@/data/stores_data";

const initialState: StoreState = {
  items: initialStores,
  loading: false,
  error: null,
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setStores: (state, action: PayloadAction<Store[]>) => {
      state.items = action.payload;
    },
    addStore: (state, action: PayloadAction<Store>) => {
      state.items.push(action.payload);
    },
    deleteStore: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((store) => store.id !== action.payload);
    },
    updateStoreOrder: (state, action: PayloadAction<Store[]>) => {
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

export const {
  setStores,
  addStore,
  deleteStore,
  updateStoreOrder,
  setLoading,
  setError,
} = storeSlice.actions;

export default storeSlice.reducer;
