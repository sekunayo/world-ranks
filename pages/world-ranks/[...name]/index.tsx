import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CountryCard from "../../../components/CountryCard";
import CountryDetailsCard from "../../../components/CountryDetailsCard";
import Header from "../../../components/Header";
import { fetchCountries, fetchCountryByName } from "../../../lib/apis";
import styles from "./world-details.module.scss";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name } = context.query;

  const country = await fetchCountryByName(name as string);

  const newCountry = country?.find((element: any) => element?.name?.common.toLowerCase() == name );
  console.log(newCountry);

  return {
    props: { newCountry },
  };
}

const WorldRankDetails: React.FC<any> = ({ newCountry }) => {
  return (
    <div className={styles["worldRanks__country"]}>
      <div className={styles["worldRanks__country-container"]}>
        <Header />

        <div className={styles["worldRanks__country-main"]}>
          <CountryCard
            name={newCountry?.name?.common}
            image={newCountry?.flags?.svg}
            population={newCountry?.population}
            region={newCountry?.region}
            area={newCountry?.area}
          />
          <CountryDetailsCard
            capital={newCountry?.capital}
            gini={newCountry?.gini}
            currencies={newCountry?.currencies}
            languages={newCountry?.languages}
            subregion={newCountry?.subregion}
            nativeName={newCountry?.name?.nativeName}
            borders={newCountry?.borders}
          />
        </div>
      </div>
    </div>
  );
};

export default WorldRankDetails;
