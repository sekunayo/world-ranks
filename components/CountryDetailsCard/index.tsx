import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchCountryByCodes } from "../../lib/apis";
import styles from "./country-details.module.scss";

interface CountryDetailsCardProps {
  capital: string;
  languages?: any;
  subregion?: string;
  currencies?: any;
  nativeName?: string;
  gini?: string;
  borders?: any;
}

const CountryDetailsCard: React.FC<CountryDetailsCardProps> = ({
  capital,
  languages,
  subregion,
  currencies,
  nativeName,
  gini,
  borders,
}) => {
  // const [neighbouringBorders, setNeighbouringBorders] = useState([]);

  // useEffect(() => {
  //   fetchCountryByCodes(borders).then((data) => {
  //     setNeighbouringBorders(data);
  //   });
  // }, [borders]);

  return (
    <div className={styles["countryDetailsCard"]}>
      <h3 className={styles["countryDetailsCard__heading"]}>Details</h3>
      <ul className={styles["countryDetailsCard__list"]}>
        <li className={styles["countryDetailsCard__list-item"]}>
          <h6>Capital</h6> <p>{capital}</p>
        </li>
        <li className={styles["countryDetailsCard__list-item"]}>
          <h6>Subregion</h6> <p>{subregion}</p>
        </li>
        <li className={styles["countryDetailsCard__list-item"]}>
          <h6>Languages</h6>
          {/* {Object.values(languages)?.map((element: any, index: any) => {
            return <p key={index + 1}>{element?.name}</p>;
          })} */}
        </li>
        <li className={styles["countryDetailsCard__list-item"]}>
          <h6>Currencies</h6>
          {/* {Object.values(currencies)?.map((element: any, index: any) => {
            return <p key={index + 1}>{element?.symbol}</p>;
          })} */}
        </li>
        <li className={styles["countryDetailsCard__list-item"]}>
          <h6>Native name</h6> <p>{nativeName}</p>
        </li>
        <li className={styles["countryDetailsCard__list-item"]}>
          <h6>Gini</h6> <p>{gini}</p>
        </li>
      </ul>
      <div className={styles["countryDetailsCard__neighbouring"]}>
        <p className={styles["countryDetailsCard__neighbouring-heading"]}>
          Neighbouring Countries
        </p>

        <div className={styles["countryDetailsCard__neighbouring-countries"]}>
          {/* {neighbouringBorders?.map((element: any, index) => {
            return (
              <div
                key={index + 1}
                className={
                  styles["countryDetailsCard__neighbouring-countries-item"]
                }
              >
                <div
                  className={
                    styles[
                      "countryDetailsCard__neighbouring-countries-item-image"
                    ]
                  }
                >
                  {element?.flags?.svg && (
                    <Image
                      src={element.flags.svg}
                      layout="fill"
                      alt={element?.name}
                    />
                  )}
                </div>
                <p
                  className={
                    styles[
                      "countryDetailsCard__neighbouring-countries-item-name"
                    ]
                  }
                >
                  {element?.name?.common}
                </p>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsCard;
