import { useGetAllPostsQuery } from "app/services/posts-api";
import { useGetAllUsersQuery } from "app/services/users-api";
import { PostList } from "components/Post/PostList";
import { addToast } from "features/toast/toast-slice";
import { useAppDispatch } from "hooks/redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();

  const { data: allPosts, isSuccess: isPostsSuccess } = useGetAllPostsQuery();
  const { data: allUsers, isSuccess: isUsersSuccess } = useGetAllUsersQuery();

  const isSuccess = isPostsSuccess && isUsersSuccess;

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        addToast({
          title: "Code 200: Posts",
          message: "Posts are loaded",
          type: "success",
        })
      );
    }
  }, [isSuccess, dispatch]);

  if (isSuccess) {
    const postsWithAuthor = allPosts.map((post) => ({
      ...post,
      author:
        allUsers.find((user) => user.id === post.userId)?.name || "Unknown",
    }));

    return <PostList posts={postsWithAuthor} />;
  }
};

export default Home;
