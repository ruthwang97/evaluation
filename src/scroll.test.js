import { render, screen } from '@testing-library/react';
import Scroll from './scroll';

test('renders the first part of the web', () => {
  render(<Scroll />);
  const linkElement1 = screen.getByText(/Hello/i);
  expect(linkElement1).toBeInTheDocument();
});
