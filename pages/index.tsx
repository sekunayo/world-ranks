import type { NextPage } from "next";
import Head from "next/head";
import FormContextProvider from "../context/CountryProvider";
import WorldRanks from "./world-ranks";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins"
        />
      </Head>

      <FormContextProvider>
        <WorldRanks />
      </FormContextProvider>
    </>
  );
};

export default Home;
