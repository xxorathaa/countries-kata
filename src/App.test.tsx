import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getCountries } from './api/country';
import { Country } from './api/types';

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
  population: 10
};

jest.mock('./api/country', () => ({
  getCountries: jest.fn(),
}));

const mockGetCountries = getCountries as jest.Mock;

describe('<App>', () => {
  function renderComponent() {
    return render(<App />);
  }
  it('should fetch countries and display basic country data', async () => {
    mockGetCountries.mockResolvedValue([mockCountry]);

    const {queryByText} = renderComponent();

    await waitFor(() => {
      expect(mockGetCountries).toBeCalled();
      expect(queryByText(mockCountry.name.common)).toBeInTheDocument();
      expect(queryByText(mockCountry.capital[0])).toBeInTheDocument();
      expect(queryByText(mockCountry.flags.png)).toBeInTheDocument();
      expect(queryByText(mockCountry.region)).toBeInTheDocument();
      expect(queryByText(mockCountry.population)).toBeInTheDocument();
    });
  })
})