import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "./api";

const rootReducers = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
