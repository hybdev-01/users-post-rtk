import Layout from "components/Layout";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="my-posts" element={<h2>My posts...</h2>} />
        <Route path="auth" element={<h2>Sign in page</h2>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
