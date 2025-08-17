import { useLazyGetUserQuery } from "app/services/users-api";
import { AuthForm } from "./AuthForm";
import { useAppDispatch } from "hooks/redux";
import { setAuth } from "./auth-slice";
import { useNavigate } from "react-router-dom";
import { encryptData } from "utils/encrypt-data";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [getUser] = useLazyGetUserQuery();

  const onSubmitClickHandler = async (userName: string) => {
    try {
      const user = await getUser(userName).unwrap();
      if (user !== undefined) {
        const token = encryptData(user.username);
        dispatch(setAuth({ user, token, isAuth: true }));
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      console.error("get user fetch is failed");
    }
  };

  return (
    <AuthForm
      title="Sign In"
      onSubmitBtnText="Send"
      onClickSubmit={onSubmitClickHandler}
    />
  );
};
