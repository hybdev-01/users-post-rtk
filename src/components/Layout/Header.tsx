import Button from "components/UI/Button";
import styles from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/redux";
import { selectAuthStatus, selectUser } from "features/auth/auth-slice";

const nameTranform = (name: string) => {
  const titles = ["Mr", "Mrs", "Ms", "Sir", "Miss", "Dr"];
  let newName = name.split(" ");
  if (titles.some((title) => name.includes(title))) {
    const titleStr = titles.join(" ");
    newName = name.split(" ").filter((item) => titleStr.search(item) < 0);
  }
  return newName[0];
};

export const Header = () => {
  const navigate = useNavigate();

  const isAuth = useAppSelector(selectAuthStatus);
  const loggedUser = useAppSelector(selectUser);

  const onSignInButtonHandler = () => {
    if (isAuth) {
      localStorage.removeItem("token");
      location.reload();
      return;
    }

    navigate("/auth");
  };

  const LeftNavigationItems = () => {
    if (isAuth) {
      return (
        <>
          <li className={styles["nav-item"]}>
            <NavLink
              to="/my-posts"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              My posts
            </NavLink>
          </li>
        </>
      );
    }

    return <></>;
  };

  const RightNavigationItems = () => {
    if (isAuth) {
      return (
        <>
          <li className={styles["nav-item"]}>
            Welcome, {nameTranform(loggedUser?.name || "")}!
          </li>
          <li className={styles["nav-item"]}>
            <Button
              className={styles["btn-auth"]}
              onClick={onSignInButtonHandler}
            >
              Log Out
            </Button>
          </li>
        </>
      );
    }

    return (
      <li className={styles["nav-item"]}>
        <Button className={styles["btn-auth"]} onClick={onSignInButtonHandler}>
          Sign In
        </Button>
      </li>
    );
  };

  return (
    <header className={styles["header"]}>
      <h2 className={styles["app-text"]}>
        <Link to="/">UP-RTK App</Link>
      </h2>
      <nav>
        <ul className={styles["left-nav"]}>
          <LeftNavigationItems />
        </ul>
        <ul className={styles["right-nav"]}>
          <RightNavigationItems />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
