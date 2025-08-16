import Button from "components/UI/Button";
import styles from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles["header"]}>
      <h2 className={styles["app-text"]}>
        <Link to="/">RTK App</Link>
      </h2>
      <nav>
        <ul className={styles["left-nav"]}>
          <li className={styles["nav-item"]}>
            <NavLink
              to="/my-posts"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              My posts
            </NavLink>
          </li>
        </ul>
        <ul className={styles["right-nav"]}>
          <li className={styles["nav-item"]}>Welcome, user!</li>
          <li className={styles["nav-item"]}>
            <Button
              className={styles["btn-auth"]}
              onClick={() => navigate("/auth")}
            >
              Sign In
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
