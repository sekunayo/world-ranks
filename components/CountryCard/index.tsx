import Image from "next/image";
import React from "react";
import styles from "./country-card.module.scss";

interface CountryCardProps {
  name?: string;
  area?: number;
  population?: number;
  image?: string;
  region?: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  area,
  population,
  image,
  region,
}) => {
  return (
    <div className={styles["countryCard"]}>
      <div className={styles["countryCard__image"]}>
        {image && <Image src={image} alt={name} layout="fill" />}
      </div>
      <h5 className={styles["countryCard__name"]}>{name}</h5>
      <p className={styles["countryCard__region"]}>{region}</p>
      <div className={styles["countryCard__statistics"]}>
        <div className={styles["countryCard__statistics-population"]}>
          <p className={styles["countryCard__statistics-population-content"]}>
            {population?.toLocaleString()}
          </p>
          <p className={styles["countryCard__statistics-population-title"]}>
            Population
          </p>
        </div>
        <div className={styles["countryCard__statistics-area"]}>
          <p className={styles["countryCard__statistics-area-content"]}>
            {area?.toLocaleString()}
          </p>
          <p className={styles["countryCard__statistics-area-title"]}>
            Area(km )
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
