import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./table-card.module.scss";

interface TableCardProps {
  image?: string;
  name?: string;
  population?: number;
  area?: number;
  gini?: number;
}

export const TableCard: React.FC<TableCardProps> = ({
  name,
  population,
  gini,
  area,
  image,
}) => {
  const router = useRouter();

  const handleClick = (name: string | undefined) => {
    router.push(`/world-ranks/${name?.toLowerCase()}`);
  };

  return (
    <button
      type="button"
      className={styles["tableCard"]}
      onClick={() => handleClick(name)}
    >
      <div className={styles["tableCard__profile"]}>
        <div className={styles["tableCard__image"]}>
          {image && <Image layout="fill" alt={name} src={image} />}
        </div>
        <p className={styles["tableCard__name"]}>{name}</p>
      </div>
      <p className={styles["tableCard__population"]}>
        {population?.toLocaleString()}
      </p>
      <p className={styles["tableCard__area"]}>{area?.toLocaleString()}</p>
      <div className={styles["tableCard__progress-bar"]}>
        <div className={styles["tableCard__progress-bar-container"]}>
          <div
            style={{
              width: `${gini}%`,
              backgroundColor: `${!gini ? "transparent" : "#21b6b7"}`,
            }}
            className={styles["tableCard__progress-bar-container-inner"]}
          ></div>
        </div>
        <p className={styles["tableCard__progress-bar-content"]}>
          {gini ? `${gini}%` : 0 + "%"}
        </p>
      </div>
    </button>
  );
};
