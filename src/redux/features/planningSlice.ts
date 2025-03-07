import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  PlanningState } from "@/types/planning";

const initialState: PlanningState = {
  items: [],
  loading: false,
  error: null,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = planningSlice.actions;

export default planningSlice.reducer;
