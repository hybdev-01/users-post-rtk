import Layout from "components/Layout";
import Auth from "pages/Auth";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { GuestRoute } from "./GuestRoute";
import MyPosts from "pages/MyPosts";
import PostDetails from "pages/PostDetails";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route element={<PrivateRoute />}>
          <Route path="my-posts">
            <Route index element={<MyPosts />} />
            <Route path="post/:postId" element={<PostDetails />} />
          </Route>
        </Route>
        <Route element={<GuestRoute />}>
          <Route path="auth" element={<Auth />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
