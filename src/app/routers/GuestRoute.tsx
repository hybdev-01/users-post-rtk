import { selectAuthStatus } from "features/auth/auth-slice";
import { useAppSelector } from "hooks/redux";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const GuestRoute = () => {
  const isAuth = useAppSelector(selectAuthStatus);

  const [waitState, setWaitState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaitState(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isAuth && !waitState) return <></>;

  if (!isAuth && waitState) return <Outlet />;

  return isAuth && <Navigate to="/" />;
};
