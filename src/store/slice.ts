//slice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface State {
  query: string;
  onboardingComplete: boolean;
}

const initialState: State = {
  query: "",
  onboardingComplete: false,
};

export const textSlice = createSlice({
  name: "text",
  initialState: {
    value: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setQuery } = textSlice.actions;

export default textSlice.reducer;
