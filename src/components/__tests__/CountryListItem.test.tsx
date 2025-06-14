import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Country } from '../../api/types';
import CountryListItem from '../CountryListItem';

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

// jest.mock('./api/country', () => ({
//   getCountries: jest.fn(),
// }));

// const mockGetCountries = getCountries as jest.Mock;

describe('<CountryListItem>', () => {
  function renderComponent() {
    return render(<CountryListItem country={mockCountry} />);
  }
  
  it('should render basic country data', async () => {
    const { queryByText } = renderComponent();

    expect(queryByText(mockCountry.name.common)).toBeInTheDocument();
    expect(queryByText(mockCountry.capital[0])).toBeInTheDocument();
    expect(queryByText(mockCountry.flags.png)).toBeInTheDocument();
    expect(queryByText(mockCountry.region)).toBeInTheDocument();
    expect(queryByText(mockCountry.population)).toBeInTheDocument();
  });
})