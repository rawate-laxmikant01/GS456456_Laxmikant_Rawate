import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/storeSlice";

export const store = configureStore({
  reducer: {
    stores: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
