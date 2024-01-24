//store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice";

export default configureStore({
  reducer: {
    user: userSlice, // 1 уровень
  },
});
