import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

type Toast = {
  id: string;
  title: string;
  message: string;
  type: "info" | "error" | "success";
};

type ToastStateType = {
  toast: Toast[];
  limit: number;
};

const initialState: ToastStateType = {
  toast: [],
  limit: 7,
};

const toastSlice = createSlice({
  name: "@@toast-slice",
  initialState,
  selectors: {
    selectToasts: (state) => state.toast,
  },
  reducers: {
    addToast: (state, action: PayloadAction<Omit<Toast, "id">>) => {
      const toasts = state.toast;
      const isToastExist = toasts.find(
        (toast) =>
          toast.title === action.payload.title &&
          toast.message === action.payload.message
      );
      if (isToastExist) return;

      if (state.toast.length >= state.limit) toasts.pop();

      toasts.unshift({ id: nanoid(10), ...action.payload });
      state.toast = [...toasts];
    },
    closeToast: (state, action: PayloadAction<string>) => {
      const toastID = action.payload;
      state.toast = state.toast.filter((toast) => toast.id !== toastID);
    },
    setToastLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    clearToasts: (state) => {
      state.toast = [];
    },
  },
});

export const { selectToasts } = toastSlice.selectors;

export const { addToast, closeToast, setToastLimit, clearToasts } =
  toastSlice.actions;

export const toastReducerPath = toastSlice.reducerPath;
export default toastSlice.reducer;
