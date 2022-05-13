import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

it("renders select option", () => {
    render(<Dropdown title={''} id={''} allOption={[]} onChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } />);
    const optionElement = screen.getByText(/select/i);
    expect(optionElement).toBeInTheDocument;
});