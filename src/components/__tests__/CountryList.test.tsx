import { render, waitFor } from '@testing-library/react';
import CountryList from '../CountryList';
import { Country } from '../../api/types';
import { getCountries } from '../../api/country';
import { useNavigate } from 'react-router';

const mockCountry: Country = {
  name: {
    common: 'commonName',
    official: 'officialName',
    nativeName: {
      'eng': {
        common: 'common name',
        official: 'native name',
      }
    }
  },
  capital: ['capitalCity'],
  region: 'region',
  flags: {
    png: 'flagPngUrl',
    svg: 'flagSvgUrl',
    alt: 'flagAltText',
  },
  population: 10,
  ccn3: 'ccn',
};

jest.mock('../../api/country', () => ({
  getCountries: jest.fn(),
}));

const mockGetCountries = getCountries as jest.Mock;

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('<CountryList>', () => {
  function renderComponent() {
    return render(<CountryList />);
  }
  it('should fetch countries', async () => {
    mockGetCountries.mockResolvedValue([mockCountry]);

    renderComponent();

    await waitFor(() => {
      expect(mockGetCountries).toBeCalled();
    });
  });

  it('should render an infinite scroll component', async () => {
    mockGetCountries.mockResolvedValue([mockCountry]);

    const { container } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountries).toBeCalled();
      expect(container.querySelector('.country-infinite-scroll')).toBeInTheDocument();
    });
  });
});