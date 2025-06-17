import { fireEvent, render } from '@testing-library/react';
import { Country } from '../../api/types';
import CountryListItem from '../CountryListItem';
import { useNavigate } from 'react-router';

const mockCountry: Country = {
  name: {
    common: 'commonName',
    official: 'officialName',
    nativeName: {
      'eng': {
        common: 'common name',
        official: 'official name',
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

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

const mockUseNavigate = useNavigate as jest.Mock;

describe('<CountryListItem>', () => {
  function renderComponent(country=mockCountry) {
    return render(<CountryListItem country={country} />);
  }

  it('should render basic country data', async () => {
    const { getByText, getByAltText } = renderComponent();

    expect(getByText(`Name: ${mockCountry.name.common}`)).toBeInTheDocument();
    expect(getByText(`Capital(s): ${mockCountry.capital}`)).toBeInTheDocument();
    expect(getByAltText(mockCountry.flags.alt)).toBeInTheDocument();
    const flagImgElement = getByAltText(mockCountry.flags.alt);
    expect(flagImgElement).toHaveAttribute('src', mockCountry.flags.png);
    expect(getByText(`Region: ${mockCountry.region}`)).toBeInTheDocument();
    expect(getByText(`Population: ${mockCountry.population}`)).toBeInTheDocument();
  });

  it('should render all capitals if a country has more than one', async () => {
    const { getByText } = renderComponent({...mockCountry, capital:['capital1', 'capital2']});

    expect(getByText(`Capital(s): capital1, capital2`)).toBeInTheDocument();
  });

  it('should navigate to the detail page when clicked', async () => {
    const navigate = jest.fn();
    mockUseNavigate.mockReturnValueOnce(navigate);
    const { getByText } = renderComponent(mockCountry);

    expect(getByText(`Name: ${mockCountry.name.common}`)).toBeInTheDocument();
    fireEvent.click(getByText(`Name: ${mockCountry.name.common}`));
    expect(navigate).toBeCalledWith(`details/${mockCountry.ccn3}`);
  });
})