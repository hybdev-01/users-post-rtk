import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { addToast } from "features/toast/toast-slice";

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

      const toastMsg = errorMsg
        ? errorMsg.concat(", ", errorOtherMsg)
        : errorOtherMsg || "Something went wrong!";

      store.dispatch(
        addToast({
          title: `Code: ${errorCode}`,
          message: toastMsg,
          type: "error",
        })
      );

      //console.log(errorMsg, errorOtherMsg, errorCode);
    }
    return next(action);
  };
