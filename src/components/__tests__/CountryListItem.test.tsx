import { render } from '@testing-library/react';
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
    const { getByText, getByAltText } = renderComponent({...mockCountry, capital:['capital1', 'capital2']});

    expect(getByText(`Capital(s): capital1, capital2`)).toBeInTheDocument();
  });
})