import React from "react";
import Icon from "../../components/Icon/icon";
import styles from "./world-ranks.module.scss";

const WorldRanks = () => {
  return (
    <div className={styles["worldRanks"]}>
      <div className={styles["worldRanks__container"]}>
        <div className={styles["worldRanks__header"]}>
          <div className={styles["worldRanks__header-logo"]}>
            <Icon icon="logo" />
          </div>
        </div>

        <div className={styles["worldRanks__search"]}>
          <p className={styles["worldRanks__search-details"]}>
            Found 234 countries
          </p>

          <form className={styles["worldRanks__search-form"]}>
            <input
              type="text"
              placeholder="Filter by Name, Region, Subregion"
              className={styles["worldRanks__search-form-input"]}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorldRanks;
