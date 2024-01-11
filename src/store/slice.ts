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

export const userSlice = createSlice({
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

export const { setQuery } = userSlice.actions;

export default userSlice.reducer;
