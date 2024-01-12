//slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  query: string; // 2 уровень
}

const initialState: UserState = {
  query: "mars",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = userSlice.actions;

export default userSlice.reducer;
