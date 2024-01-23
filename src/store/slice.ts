//slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../api";
import { CaseItem } from "../types";
import { RootState } from ".";

export interface UserState {
  query: string; //2 уровень хранилища введённый пользователем запрос
  language: string; // 2 уровень хранилища - язык, выбранный пользователем;
  cases: {
    // 2 уровень хранилища - информация о ситуациях;
    data: CaseItem[];
    loading: boolean;
    error: any;
  };
}

const initialState: UserState = {
  query: "mars",
  language: "",
  cases: {
    data: [],
    loading: true,
    error: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(api.cases.getCases.pending, (state) => {
        state.cases.loading = true;
      })
      .addCase(api.cases.getCases.fulfilled, (state, action) => {
        state.cases.data = action.payload;
        state.cases.loading = false;
        state.cases.error = null;
      })
      .addCase(api.cases.getCases.rejected, (state, action) => {
        state.cases.loading = false;
        state.cases.error = action.error;
      });
  },
});

export const { setQuery } = userSlice.actions;

export default userSlice.reducer;
