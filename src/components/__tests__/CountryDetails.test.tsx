import { fireEvent, render, waitFor } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router';
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
        common: 'common name',
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
  borders: [
    "ENG",
  ],
  population: 10,
  ccn3: 'ccn',
  currencies: {
    'USD': {
      symbol: '$',
      name: 'United States dollar',
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
  useNavigate: jest.fn(),
}));
const mockUseParams = useParams as jest.Mock;
const mockUseNavigate = useNavigate as jest.Mock;

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

  it('should render no country found if no country is returned', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([]);

    const { container, getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(container.querySelector('.no-country-detail')).toBeInTheDocument();
      expect(getByText('Country Not Found')).toBeInTheDocument();
      expect(container.querySelector('.back-btn')).toBeInTheDocument();
    });
  });

  it('should display the country details', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([mockCountryDetail]);

    const { container, getByAltText, getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByAltText(mockCountryDetail.flags.alt)).toBeInTheDocument();
      const flagImgElement = getByAltText(mockCountryDetail.flags.alt);
      expect(flagImgElement).toHaveAttribute('src', mockCountryDetail.flags.png);
      expect(getByText(mockCountryDetail.name.common)).toBeInTheDocument();
      expect(getByText(`Native Name: common name`)).toBeInTheDocument();
      expect(getByText(`Capital(s): ${mockCountryDetail.capital.join(', ')}`)).toBeInTheDocument();
      expect(getByText(`Region: ${mockCountryDetail.region}`)).toBeInTheDocument();
      expect(getByText(`Sub Region: ${mockCountryDetail.subregion}`)).toBeInTheDocument();
      expect(getByText(`Population: ${mockCountryDetail.population}`)).toBeInTheDocument();
      expect(getByText(`Timezone(s): ${mockCountryDetail.timezones.join(', ')}`)).toBeInTheDocument();
      expect(getByText(`Currency(s): United States dollar($)`)).toBeInTheDocument();
      expect(getByText('Language(s): English')).toBeInTheDocument();
      expect(getByText('Borders: English')).toBeInTheDocument();
      expect(container.querySelector('.back-btn')).toBeInTheDocument();
    });
  });

  it('should display more than one common native name comma separated', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{
      ...mockCountryDetail, name: {
        nativeName: {
          'eng': {
            common: 'common name',
          },
          'ell': {
            common: 'common name in greek',
          }
        }
      }
    }]);

    const { getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText(`Native Name: common name, common name in greek`)).toBeInTheDocument();
    });
  });

  it('should not display the same common native name more than once', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{
      ...mockCountryDetail, name: {
        nativeName: {
          'eng': {
            common: 'common name',
          },
          'ell': {
            common: 'common name',
          }
        }
      }
    }]);

    const { getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText(`Native Name: common name`)).toBeInTheDocument();
    });
  });

  it('should display more than one currency comma separated', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{
      ...mockCountryDetail, currencies: {
        'USD': {
          symbol: '$',
          name: 'United States dollar'
        },
        'CNY': {
          symbol: '¥',
          name: 'Chinese yuan'
        }
      }
    }]);

    const { getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText(`Currency(s): United States dollar($), Chinese yuan(¥)`)).toBeInTheDocument();
    });
  });

  it('should display more than one language comma separated', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{ ...mockCountryDetail, languages: { 'eng': 'English', 'ell': 'Greek' } }]);

    const { getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText(`Language(s): English, Greek`)).toBeInTheDocument();
    });
  });

  it('should display more than one border comma separated', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{ ...mockCountryDetail, borders: ['ENG', 'ELL'] }]);

    const { getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(getByText('Borders: English, Greek')).toBeInTheDocument();
    });
  });

  it('should not display the borders if there are none', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    mockGetCountryDetails.mockResolvedValue([{ ...mockCountryDetail, borders: undefined }]);

    const { queryByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      expect(queryByText('Borders: ')).not.toBeInTheDocument();
    });
  });

  it('should navigate to the country list page when back is pressed', async () => {
    mockUseParams.mockReturnValue({ ccn3: '798' });
    const navigate = jest.fn();
    mockUseNavigate.mockReturnValue(navigate);
    mockGetCountryDetails.mockResolvedValue([{ ...mockCountryDetail, borders: undefined }]);

    const { getByText } = renderComponent();

    await waitFor(() => {
      expect(mockGetCountryDetails).toBeCalledWith('798');
      fireEvent.click(getByText('BACK'));
      expect(navigate).toBeCalledWith('/');
    });
  });
});