import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { showError } from "features/error/error-slice";

export const rtkQueryErrorLogger: Middleware =
  (store) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const errorMsg =
        "data" in action.error
          ? (action.error.data as { message: string }).message
          : action.error.message;

      const errorOtherMsg =
        "error" in (action.payload as { error: string })
          ? (action.payload as { error: string }).error
          : "";

      const errorCode =
        "status" in (action.payload as { status: number | string })
          ? (action.payload as { status: number | string }).status
          : 0;

      store.dispatch(
        showError({
          errorMessage: errorMsg
            ? errorMsg.concat(", ", errorOtherMsg)
            : errorOtherMsg || "Something went wrong!",
          errorCode: errorCode,
          isError: true,
        })
      );
    }
    return next(action);
  };
