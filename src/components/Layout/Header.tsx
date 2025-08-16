import Button from "components/UI/Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <h2 className={styles["app-text"]}>
        <a href="/#">RTK App</a>
      </h2>
      <nav>
        <ul className={styles["left-nav"]}>
          <li className={styles["nav-item"]}>
            <a href="/#my-posts">My posts</a>
          </li>
        </ul>
        <ul className={styles["right-nav"]}>
          <li className={styles["nav-item"]}>Welcome, user!</li>
          <li className={styles["nav-item"]}>
            <Button className={styles["btn-auth"]}>Sign In</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
