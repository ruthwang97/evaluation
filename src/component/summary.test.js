import { render, screen } from '@testing-library/react';
import Summary from './summary';

test('render', () => {
  const {container} = render(<Summary />)
  
  expect(container.querySelector('p')).toBeInTheDocument();
});

test('render', () => {
    const {container} = render(<Summary />)
    expect(container.querySelector('h3')).toBeInTheDocument();
});
