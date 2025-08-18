import styles from "./PostDetails.module.css";

import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetPostCommentsQuery } from "app/services/comments-api";
import { useGetPostByIdQuery } from "app/services/posts-api";
import { useGetAllUsersQuery } from "app/services/users-api";
import { useParams } from "react-router-dom";

import PostImg from "assets/images/post-img.png";
import { Card } from "components/UI/Card";
import { CommentsList } from "components/Comments/CommentsList";

const PostDetails = () => {
  const { postId } = useParams();

  const { data: postData, isSuccess: postSuccess } = useGetPostByIdQuery(
    postId ? +postId : skipToken
  );
  const { data: allUsers, isSuccess: usersSuccess } = useGetAllUsersQuery();
  const { data: commentsData, isSuccess: commentsSuccess } =
    useGetPostCommentsQuery(postId ? +postId : skipToken);

  const isSuccess = postSuccess && usersSuccess && commentsSuccess;

  if (isSuccess) {
    const author = allUsers.find((user) => user.id === postData.userId)?.name;

    return (
      <section className={styles["post-details"]}>
        <Card
          className={styles["post-card"]}
          imgSrc={PostImg}
          title={postData.title}
          description={postData.body}
          topText={`Author: ${author}`}
        />
        <CommentsList className={styles["comments"]} comments={commentsData} />
      </section>
    );
  }
};

export default PostDetails;
