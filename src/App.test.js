import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the compliance page', () => {
  render(<App />);

  //check if page loaded correctly
  expect(screen.getByRole("heading")).toHaveTextContent(/Street Rate/);
});
