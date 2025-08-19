import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetUserPostsQuery } from "app/services/posts-api";
import { PostList } from "components/Post/PostList";
import { selectUser } from "features/auth/auth-slice";
import { addToast } from "features/toast/toast-slice";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";

const MyPosts = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const { data: myPosts, isSuccess } = useGetUserPostsQuery(
    user?.id ?? skipToken
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        addToast({
          message: "Your posts are loaded",
          title: "Code 200: Your posts",
          type: "success",
        })
      );
      dispatch(
        addToast({
          message:
            "Here, only your posts. You can view them in detail by clicking on any post. ",
          title: "View post",
          type: "info",
        })
      );
    }
  }, [isSuccess, dispatch]);

  return (
    isSuccess && (
      <PostList
        posts={myPosts.map((post) => ({
          ...post,
          author: user?.name || "Unknown",
        }))}
      />
    )
  );
};

export default MyPosts;
