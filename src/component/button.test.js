import { render, screen } from '@testing-library/react';
import Button from './button';

test('render', () => {
  const {container} = render(<Button />)
  expect(container.querySelector('a')).toHaveClass("btn");
});

