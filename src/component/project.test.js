import { render, screen } from '@testing-library/react';
import Project from './project';
import Button from './button'
test('render', () => {
    render(<Project />)

    expect(<Project />).toContainElement(<Button />);
});
