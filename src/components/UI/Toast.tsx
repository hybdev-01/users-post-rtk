import styles from "./Toast.module.css";

import NotifInfoIcon from "assets/icons/notif-info-icon.svg?react";
import NotifErrorIcon from "assets/icons/notif-error-icon.svg?react";
import NotifSuccessIcon from "assets/icons/notif-success-icon.svg?react";

import ToastCloseIcon from "assets/icons/cross-icon.svg?react";

import Button from "./Button";

const NotifIcons = {
  info: NotifInfoIcon,
  error: NotifErrorIcon,
  success: NotifSuccessIcon,
};

interface ToastProps {
  title: string;
  message: string;
  type: keyof typeof NotifIcons;
  onClose: () => void;
}

export const Toast = ({ title, message, type, onClose }: ToastProps) => {
  const ToastIcon = NotifIcons[type];

  return (
    <li className={styles["toast-item"]}>
      <span className={styles["toast-icon"]}>{<ToastIcon />}</span>
      <div className={styles["toast-content"]}>
        <strong className={`${styles["title"]} ${styles[type]}`}>
          {title}
        </strong>
        <p className={styles["message"]}>{message}</p>
      </div>
      <Button className={styles["close"]} onClick={onClose} isEmpty>
        <ToastCloseIcon />
      </Button>
    </li>
  );
};
