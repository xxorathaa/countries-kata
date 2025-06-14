import { render, waitFor } from '@testing-library/react';
import App from './App';
import { getCountries } from './api/country';

jest.mock('./api/country', () => ({
  getCountries: jest.fn(),
}));

const mockGetCountries = getCountries as jest.Mock;

describe('<App>', () => {
  function renderComponent() {
    return render(<App />);
  }

  it('should render the CountryList component', async () => {
    mockGetCountries.mockResolvedValue([]);
    const { container } = renderComponent();

    await waitFor(() => expect(mockGetCountries).toBeCalled());

    expect(container.querySelector('.country-list')).toBeInTheDocument();
  });
});
