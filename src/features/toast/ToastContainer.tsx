import { useAppDispatch, useAppSelector } from "hooks/redux";
import styles from "./ToastContainer.module.css";
import {
  clearToasts,
  closeToast,
  selectToasts,
  setToastLimit,
} from "./toast-slice";
import { Toast } from "components/UI/Toast";
import { useEffect } from "react";

export const ToastContainer = () => {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector(selectToasts);

  const onToastClose = (toastId: string) => dispatch(closeToast(toastId));

  useEffect(() => {
    const limitToast = Math.floor((window.outerHeight * (1 - 0.15)) / 100);
    dispatch(setToastLimit(limitToast));

    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        dispatch(clearToasts());
      }, 6000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toasts, dispatch]);

  return (
    <ul className={styles["toast-list"]}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => onToastClose(toast.id)}
          {...toast}
        />
      ))}
    </ul>
  );
};
