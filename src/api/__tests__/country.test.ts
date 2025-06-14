import axios from "axios";

import { getCountries } from "../country";
import { Country } from "../types";

const mockCountry: Country = {
  name: {
    common: 'commonName',
    official: 'officialName',
    nativeName: undefined
  },
  capital: ['capitalCity'],
  region: 'region',
  flags: {
    png: 'flagPngUrl',
    svg: 'flagSvgUrl',
    alt: 'flagAltText'
  },
  population: 10,
  ccn3: 'ccn',
};

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const getMock = axios.get as jest.Mock;

describe('getCountries', () => {
  it('should return a list of countries', async () => {
    getMock.mockResolvedValueOnce({data: [mockCountry]});

    let countries = await getCountries();

    expect(getMock).toBeCalledWith('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,ccn3');
    expect(countries[0].name.common).toBe(mockCountry.name.common);
  })
})
