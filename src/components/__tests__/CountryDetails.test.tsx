import { render } from '@testing-library/react';
import { useParams } from 'react-router';
import CountryDetails from '../CountryDetails';

jest.mock('react-router', () => ({
  useParams: jest.fn(),
}));
const mockUseParams = useParams as jest.Mock;

describe('<CountryDetails>', () => {
  function renderComponent() {
    return render(<CountryDetails />);
  }
  it('should fetch countries', async () => {
    mockUseParams.mockReturnValue({ccn3: '798'});

    const { getByText } = renderComponent();

    expect(getByText('798')).toBeInTheDocument();
  });
});