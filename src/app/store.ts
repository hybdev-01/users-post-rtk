import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "./api";

import authReducer, { authReducerPath } from "features/auth/auth-slice";

const rootReducers = combineReducers({
  [authReducerPath]: authReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
