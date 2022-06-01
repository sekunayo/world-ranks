import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon/icon";
import styles from "./header.module.scss";

const Header = () => {
  const router = useRouter();

  const goBackToHome = () => {
    router.push("/")
  }

  return (
    <div className={styles["header"]}>
      <button onClick={goBackToHome} type="button" className={styles["header-logo"]}>
        <Icon icon="logo" />
      </button>
    </div>
  );
};

export default Header;
