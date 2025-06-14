import axios from "axios";

import { getCountries, getCountryDetails } from "../country";
import { Country, CountryDetail } from "../types";

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
  ccn3: '798',
};

const mockCountryDetail: CountryDetail = {
  ...mockCountry,
  currencies: {
    'USD': {
      symbol: '$',
      name: 'United States dollar'
    }
  },
  subregion: 'subregion',
  languages: {
    'eng': 'English',
  },
  timezones: ['UTC+12:00'],
}

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
  });
});

describe('getCountryDetails', () => {
  it('should return complete country details', async () => {
    getMock.mockResolvedValueOnce({data: [mockCountryDetail]});

    let countryDetails = await getCountryDetails('798');

    expect(getMock).toBeCalledWith('https://restcountries.com/v3.1/alpha/798');
    expect(countryDetails[0].name.common).toBe(mockCountryDetail.name.common);
    expect(countryDetails[0].languages['eng']).toBe(mockCountryDetail.languages['eng']);
  });
});
