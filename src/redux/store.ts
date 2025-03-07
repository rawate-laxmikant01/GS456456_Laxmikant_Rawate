import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/storeSlice";
import skuReducer from "./features/skuSlice";

export const store = configureStore({
  reducer: {
    stores: storeReducer,
    skus: skuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
