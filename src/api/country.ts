import axios from "axios";
import { Country, CountryDetail } from "./types";

export async function getCountries(): Promise<Country[]> {
  const { data } = await axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,ccn3');
  
  return data;
}

export async function getCountryDetails(ccn3: string): Promise<CountryDetail[]> {
  const { data } = await axios.get<CountryDetail[]>(`https://restcountries.com/v3.1/alpha/${ccn3}`);
  
  return data;
}
