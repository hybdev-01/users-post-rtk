import styles from "./PostList.module.css";

import { Card } from "components/UI/Card";

import PostImg from "assets/images/post-img.png";
import type { Posts } from "app/services/posts-api";

interface PostListProps {
  posts: Posts[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className={styles["post-list"]}>
      {posts?.map((post) => (
        <li key={post.id}>
          <Card
            className={styles["post-card"]}
            imgSrc={PostImg}
            title={post.title}
            description={post.body}
            topText={`Author: ${post.userId}`}
          />
        </li>
      ))}
    </ul>
  );
};
