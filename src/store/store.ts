// store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  queryString: string;
}

const initialState: QueryState = {
  queryString: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQueryString: (state: any, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
  },
});

export const { setQueryString } = querySlice.actions;

export default configureStore({
  reducer: {
    query: querySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
