import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/icon";
import { Table } from "../../components/Table";
import { fetchCountries } from "../../lib/apis";
import styles from "./world-ranks.module.scss";

const WorldRanks = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetchCountries().then((data) => {
      setCountries(data);
    });
  },[fetchCountries]);

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
            Found {countries?.length} countries
          </p>

          <form className={styles["worldRanks__search-form"]}>
            <input
              value={searchValue}
              onChange={(e) => handleSearchChange(e)}
              type="text"
              placeholder="Filter by Name, Region, Subregion"
              className={styles["worldRanks__search-form-input"]}
            />
          </form>
        </div>

        <div className={styles["worldRanks__table"]}>
          <Table countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default WorldRanks;
