import { useCheckAuth } from "hooks/useCheckAuth";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  useCheckAuth();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
