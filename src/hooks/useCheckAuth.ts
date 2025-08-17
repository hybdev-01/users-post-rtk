import { useEffect } from "react";

import { decryptData } from "utils/encrypt-data";
import { useAppDispatch, useAppSelector } from "./redux";
import { selectAuthStatus, setAuth } from "features/auth/auth-slice";
import { useLazyGetUserQuery } from "app/services/users-api";

export const useCheckAuth = () => {
  const isAuth = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();

  const [getUser] = useLazyGetUserQuery();

  useEffect(() => {
    if (!isAuth) {
      const token = localStorage.getItem("token");
      if (token) {
        const userName = decryptData(token);

        getUser(userName)
          .unwrap()
          .then(
            (user) => user && dispatch(setAuth({ user, token, isAuth: true }))
          );
      }
    }
  }, []);
};
