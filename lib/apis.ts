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
