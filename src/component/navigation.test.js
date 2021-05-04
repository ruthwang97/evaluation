import { render, screen } from '@testing-library/react';
import Navigation from './navigation';

test('render', () => {
    render(<Navigation />);
    screen.debug();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
});