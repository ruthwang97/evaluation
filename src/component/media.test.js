import { render, screen } from '@testing-library/react';
import Media from './media';

test('render', () => {
  const {container} = render(<Media />)
  expect(container.querySelector('img')).toHaveClass("img-responsive");
});