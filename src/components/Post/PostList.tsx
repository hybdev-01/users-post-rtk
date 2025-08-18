import styles from "./PostList.module.css";

import { Card } from "components/UI/Card";

import PostImg from "assets/images/post-img.png";
import type { Posts } from "app/services/posts-api";
import { Link } from "react-router-dom";

type PostListType = Omit<Posts, "userId"> & {
  author: string;
};

interface PostListProps {
  posts: PostListType[];
}

export const PostList = ({ posts }: PostListProps) => {
  console.log("posts list");

  return (
    <ul className={styles["post-list"]}>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link to={`post/${post.id}`}>
            <Card
              className={styles["post-card"]}
              imgSrc={PostImg}
              title={post.title}
              description={post.body}
              topText={`Author: ${post.author}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
