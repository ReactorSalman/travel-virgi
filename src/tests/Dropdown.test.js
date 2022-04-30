import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../components/Dropdown';

it("renders select option", () => {
    render(<Dropdown />);
    const optionElement = screen.getByText(/select/i);
    expect(optionElement).toBeInTheDocument;
});