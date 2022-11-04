import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pokemon from external', () => {
  render(<App />);
  const Pokemon= screen.getByTestId('pokemon');
  expect(Pokemon).toBeInTheDocument();
});
