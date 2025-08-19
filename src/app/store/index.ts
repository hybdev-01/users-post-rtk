import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "app/api";

import toastReducer, { toastReducerPath } from "features/toast/toast-slice";
import authReducer, { authReducerPath } from "features/auth/auth-slice";
import { rtkQueryErrorLogger } from "./middleware/rtkQueryErrorLogger";

const rootReducers = combineReducers({
  [toastReducerPath]: toastReducer,
  [authReducerPath]: authReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware, rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
