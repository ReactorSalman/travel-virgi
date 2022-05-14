import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

it("Should find search button", () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('search-button');
});