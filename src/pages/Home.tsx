import { useGetAllPostsQuery } from "app/services/posts-api";
import { PostList } from "components/Post/PostList";

const Home = () => {
  const { data: allPosts } = useGetAllPostsQuery();

  return <>{allPosts && <PostList posts={allPosts} />}</>;
};

export default Home;
