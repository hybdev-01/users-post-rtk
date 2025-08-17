import styles from "./Auth.module.css";

import { SignIn } from "features/auth/SignIn";

export const Auth = () => {
  return (
    <div className={styles["auth-page"]}>
      <SignIn />
    </div>
  );
};

export default Auth;
