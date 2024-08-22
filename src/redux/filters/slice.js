import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
