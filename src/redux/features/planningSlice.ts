import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Planning, PlanningState } from "@/types/planning";
import planningData from "@/data/planning_data";

const initialState: PlanningState = {
  items: planningData,
  loading: false,
  error: null,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    setPlanningData: (state, action: PayloadAction<Planning[]>) => {
      state.items = action.payload;
    },
    addPlanningEntry: (state, action: PayloadAction<Planning>) => {
      state.items.push(action.payload);
    },
    deletePlanningEntry: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
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
  setPlanningData,
  addPlanningEntry,
  deletePlanningEntry,
  setLoading,
  setError,
} = planningSlice.actions;

export default planningSlice.reducer;
