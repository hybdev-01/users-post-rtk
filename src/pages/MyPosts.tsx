import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetUserPostsQuery } from "app/services/posts-api";
import { PostList } from "components/Post/PostList";
import { selectUser } from "features/auth/auth-slice";
import { useAppSelector } from "hooks/redux";

const MyPosts = () => {
  const user = useAppSelector(selectUser);
  const { data: myPosts, isSuccess } = useGetUserPostsQuery(
    user?.id ?? skipToken
  );

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
