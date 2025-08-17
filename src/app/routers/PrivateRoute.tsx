import { selectAuthStatus } from "features/auth/auth-slice";
import { useAppSelector } from "hooks/redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isAuth = useAppSelector(selectAuthStatus);

  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
