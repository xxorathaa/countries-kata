import { render, waitFor } from '@testing-library/react';
import { useParams } from 'react-router';
import CountryDetails from '../CountryDetails';
import { getCountryDetails } from '../../api/country';
import { CountryDetail, LanguageCodes } from '../../api/types';

const mockCountryDetail: CountryDetail = {
  name: {
    common: 'commonName',
    official: 'officialName',
    nativeName: {
      eng: {
        official: 'official name',
        common: 'common name'
      }
    }
  },
  capital: ['capitalCity'],
  region: 'region',
  flags: {
    png: 'flagPngUrl',
    svg: 'flagSvgUrl',
    alt: 'flagAltText'
  },
  borders: [
    "ENG",
  ],
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
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([mockCountryDetail]);

    renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
    });
  });

  it('should render nothing if no country is returned', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([]);

    const { container } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(container.querySelector('.country-detail')).not.toBeInTheDocument();
    });
  });

  it('should display the country details', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([mockCountryDetail]);

    const { getByAltText, getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByAltText(mockCountryDetail.flags.alt)).toBeInTheDocument();
      const flagImgElement = getByAltText(mockCountryDetail.flags.alt);
      expect(flagImgElement).toHaveAttribute('src', mockCountryDetail.flags.png);
      expect(getByText(`Native Name: ${JSON.stringify(mockCountryDetail.name.nativeName)}`)).toBeInTheDocument();
      expect(getByText(`Capital(s): ${mockCountryDetail.capital.join(', ')}`)).toBeInTheDocument();
      expect(getByText(`Region: ${mockCountryDetail.region}`)).toBeInTheDocument();
      expect(getByText(`Sub Region: ${mockCountryDetail.subregion}`)).toBeInTheDocument();
      expect(getByText(`Population: ${mockCountryDetail.population}`)).toBeInTheDocument();
      expect(getByText(`Timezone(s): ${mockCountryDetail.timezones.join(', ')}`)).toBeInTheDocument();
      expect(getByText(`Currencie(s): ${JSON.stringify(mockCountryDetail.currencies)}`)).toBeInTheDocument();
      expect(getByText('Language(s): English')).toBeInTheDocument();
      expect(getByText('Borders: English')).toBeInTheDocument();
    });
  });

  it('should display more that one language comma separated', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{...mockCountryDetail, languages: {'eng': 'English', 'ell': 'Greek'}}]);

    const { getByAltText, getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText(`Language(s): English, Greek`)).toBeInTheDocument();
    });
  });

  it('should display more that one border comma separated', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{...mockCountryDetail, borders: ['ENG', 'ELL']}]);

    const { getByAltText, getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText('Borders: English, Greek')).toBeInTheDocument();
    });
  });

  it('should not display the borders if there are none', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{...mockCountryDetail, borders: undefined}]);

    const { queryByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(queryByText('Borders: ')).not.toBeInTheDocument();
    });
  });
});