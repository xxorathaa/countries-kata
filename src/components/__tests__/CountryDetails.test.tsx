import { render, waitFor } from '@testing-library/react';
import { useParams } from 'react-router';
import CountryDetails from '../CountryDetails';
import { getCountryDetails } from '../../api/country';
import { CountryDetail } from '../../api/types';

const mockCountryDetail: CountryDetail = {
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
};

jest.mock('../../api/country', () => ({
  getCountryDetails: jest.fn(),
}));

const mockGetCountryDetails = getCountryDetails as jest.Mock;

jest.mock('react-router', () => ({
  useParams: jest.fn(),
}));
const mockUseParams = useParams as jest.Mock;

describe('<CountryDetails>', () => {
  function renderComponent() {
    return render(<CountryDetails />);
  }
  it('should fetch country details', async () => {
    mockUseParams.mockReturnValue({ccn3: '798'});
    mockGetCountryDetails.mockResolvedValue([mockCountryDetail]);

    renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
    })
  });
});