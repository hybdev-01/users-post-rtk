import type { Comments } from "app/services/comments-api";
import styles from "./CommentsList.module.css";
import clsx from "clsx";

interface CommentsListProps {
  className?: string;
  comments: Pick<Comments, "id" | "email" | "body">[];
}

export const CommentsList = ({ comments, className }: CommentsListProps) => {
  return (
    <div className={clsx(styles["comments-wrapper"], className)}>
      <ul className={styles["comment-list"]}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles["comment-item"]}>
            <b className={styles["author"]}>{comment.email}</b>
            <p className={styles["text"]}>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
