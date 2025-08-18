import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ErrorStateType = {
  errorMessage: string;
  errorCode: number | string;
  isError: boolean;
};

const initialState: ErrorStateType = {
  errorMessage: "",
  errorCode: -1,
  isError: false,
};

const errorSlice = createSlice({
  name: "@@error-slice",
  initialState,
  selectors: {
    selectError: (state) => state,
  },
  reducers: {
    showError: (_, action: PayloadAction<ErrorStateType>) => action.payload,
    clearError: () => initialState,
  },
});

export const { selectError } = errorSlice.selectors;
export const { showError, clearError } = errorSlice.actions;

export const errorReducerPath = errorSlice.reducerPath;
export default errorSlice.reducer;
