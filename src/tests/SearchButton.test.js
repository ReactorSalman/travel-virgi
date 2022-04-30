import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchButton from '../components/SearchButton';

it("Should find search button", () => {
    render(<SearchButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('search-button');
});