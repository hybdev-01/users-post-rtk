import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "app/services/users-api";
type AuthStateType = {
  user: User | null;
  token: string;
  isAuth: boolean;
};

const initialState: AuthStateType = {
  user: null,
  token: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "@@auth-slice",
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectAuthStatus: (state) => state.isAuth,
  },
  reducers: {
    setAuth: (_, action: PayloadAction<AuthStateType>) => action.payload,
  },
});

export const { setAuth } = authSlice.actions;
export const { selectUser, selectAuthStatus } = authSlice.selectors;

export const authReducerPath = authSlice.reducerPath;
export default authSlice.reducer;
