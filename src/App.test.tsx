import { render, waitFor } from '@testing-library/react';
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
  it('should fetch countries', async () => {
    mockGetCountries.mockResolvedValue([mockCountry]);

    renderComponent();

    await waitFor(() => {
      expect(mockGetCountries).toBeCalled();
    });
  });

  it('should render an infinite scroll component', async () => {
    mockGetCountries.mockResolvedValue([mockCountry]);

    const {container} = renderComponent();
    
    await waitFor(() => {
      expect(mockGetCountries).toBeCalled();
      expect(container.querySelector('.country-infinite-scroll')).toBeInTheDocument();
    });
  })
})