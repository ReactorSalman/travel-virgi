import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

it("renders select option", () => {
    render(<Dropdown />);
    const optionElement = screen.getByText(/select/i);
    expect(optionElement).toBeInTheDocument;
});