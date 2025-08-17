import { useGetAllPostsQuery } from "app/services/posts-api";
import { useGetAllUsersQuery } from "app/services/users-api";
import { PostList } from "components/Post/PostList";

const Home = () => {
  const { data: allPosts, isSuccess: isPostsSuccess } = useGetAllPostsQuery();
  const { data: allUsers, isSuccess: isUsersSuccess } = useGetAllUsersQuery();

  if (isPostsSuccess && isUsersSuccess) {
    const postsWithAuthor = allPosts.map((post) => ({
      ...post,
      author:
        allUsers.find((user) => user.id === post.userId)?.name || "Unknown",
    }));

    return <PostList posts={postsWithAuthor} />;
  }
};

export default Home;
