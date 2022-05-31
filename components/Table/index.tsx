import React, { useEffect, useState } from "react";
import styles from "./table.module.scss";
import { TableCard } from "./TableCard";

interface TableProps {
  countries: any;
}

export const Table: React.FC<TableProps> = ({ countries }) => {

  const [rankedCountries, setRankedCountries] = useState([]);

  const sortedArray = countries.sort((a : any, b : any) => {
    return b.population - a.population;
  })


  useEffect(() => {
    setRankedCountries(sortedArray);
  },[sortedArray])

  return (
    <div className={styles["table"]}>
      <div className={styles["table__header"]}>
        <h4 className={styles["table__header-item"]}>Name</h4>
        <h4 className={styles["table__header-item"]}>Population</h4>
        <h4 className={styles["table__header-item"]}>Area (km )</h4>
        <h4 className={styles["table__header-item"]}>Gini</h4>
      </div>
      <div className={styles["table__container"]}>
        {rankedCountries?.map((element: any, index: any) => {
          return (
            <TableCard
              name={element?.name?.common}
              image={element?.flags?.svg}
              population={element?.population}
              area={element?.area}
              gini={element?.gini?.["2019"]}
              key={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};
