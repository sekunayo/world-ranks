import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/icon";
import { Table } from "../../components/Table";
import { fetchCountries } from "../../lib/apis";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./world-ranks.module.scss";
import Header from "../../components/Header";

const WorldRanks = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const filterCountries = () => {
    const newCountries = countries?.map((element: any) => {
      if (
        element?.name?.common
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        element?.region?.toLowerCase().includes(searchValue.toLowerCase()) ||
        element?.subregion?.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return element;
      }
    });

    const notRelatedCountries = countries?.map((element: any) => {
      if (
        !element?.name?.common
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        !element?.region?.toLowerCase().includes(searchValue.toLowerCase()) ||
        !element?.subregion?.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return element;
      }
    });

    return [newCountries, notRelatedCountries];
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const newCountry = filterCountries();

    // setCountries(newCountry);
  };

  useEffect(() => {
    fetchCountries().then((data) => {
      setCountries(data);
    });
  }, [fetchCountries]);

  return (
    <div className={styles["worldRanks"]}>
      <div className={styles["worldRanks__container"]}>
        <Header />

        <div className={styles["worldRanks__search"]}>
          <p className={styles["worldRanks__search-details"]}>
            Found {countries?.length} countries
          </p>

          <form
            onSubmit={(e) => handleSubmit(e)}
            className={styles["worldRanks__search-form"]}
          >
            <div className={styles["worldRanks__search-icon"]}>
              <BiSearchAlt />
            </div>
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
