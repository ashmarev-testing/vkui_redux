// src/store/index.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { userSlice } from "./slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export { store };

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

type DispatchFunc = () => RootDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
