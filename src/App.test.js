import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react 16 feature demo header', () => {
  render(<App />);
  const linkElement = screen.getByText(/react 16 feature demo/i);
  expect(linkElement).toBeInTheDocument();
});
