import axios from "axios";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountryByName = async (name: string) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountryByCodes = async (borders: string[]) => {
  const newBorders = borders.join();
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${newBorders}`
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
