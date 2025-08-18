import { Card } from "components/UI/Card";
import styles from "./AuthForm.module.css";
import Button from "components/UI/Button";
import { useRef, type FormEvent } from "react";

interface AuthFormProps {
  title: string;
  onSubmitBtnText: string;
  onClickSubmit: (text: string) => void;
}

export const AuthForm = ({
  title,
  onSubmitBtnText,
  onClickSubmit,
}: AuthFormProps) => {
  const userNameInput = useRef<HTMLInputElement>(null);

  const onSumbitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userNameInput.current) return;

    if (userNameInput.current.value.trim().length <= 3) {
      alert("text length should be more than 3");
      return;
    }

    onClickSubmit(userNameInput.current.value);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSumbitHandler} className={styles["auth-form"]}>
      <Card className={styles["auth-card"]}>
        <h2 className={styles["form-title"]}>{title}</h2>
        <label htmlFor="username">Username:</label>
        <input
          ref={userNameInput}
          id="username"
          placeholder="Enter username..."
          autoComplete="off"
          autoFocus={true}
        />
        <Button>{onSubmitBtnText}</Button>
      </Card>
    </form>
  );
};
