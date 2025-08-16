import styles from "./Card.module.css";

import { type ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  imgSrc?: string;
  title?: string;
  description?: string;
  topText?: string;
}

export const Card = ({
  children,
  imgSrc,
  title,
  description,
  topText,
}: CardProps) => {
  if (children) {
    return <div className={styles["card"]}>{children}</div>;
  }

  return (
    <div className={styles["card"]}>
      <p className={styles["top-text"]}>{topText}</p>
      <img
        className={styles["img"]}
        src={imgSrc}
        alt={`card-img-${title?.split(" ")[0]}`}
        loading="lazy"
      />
      <div className={styles["info"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
};
