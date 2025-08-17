import { useGetUserPostsQuery } from "app/services/posts-api";
import { PostList } from "components/Post/PostList";
import { selectUser } from "features/auth/auth-slice";
import { useAppSelector } from "hooks/redux";

const MyPosts = () => {
  const user = useAppSelector(selectUser);
  const { data: myPosts, isSuccess } = useGetUserPostsQuery(user?.id || -1);

  if (isSuccess) {
    return (
      <PostList
        posts={
          myPosts?.map((post) => ({ ...post, author: user?.name || "" })) || []
        }
      />
    );
  }
};

export default MyPosts;
