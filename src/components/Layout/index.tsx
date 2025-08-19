import { useCheckAuth } from "hooks/useCheckAuth";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "features/toast/ToastContainer";

export const Layout = () => {
  useCheckAuth();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
