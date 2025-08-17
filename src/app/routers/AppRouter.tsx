import Layout from "components/Layout";
import Auth from "pages/Auth";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { GuestRoute } from "./GuestRoute";
import MyPosts from "pages/MyPosts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="my-posts" element={<MyPosts />} />
        </Route>
        <Route element={<GuestRoute />}>
          <Route path="auth" element={<Auth />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
