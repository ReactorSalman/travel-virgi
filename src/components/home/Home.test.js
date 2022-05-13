import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

it("Should find header", () => {
    render(<Home />);
    const headerElement = screen.getByText('Travel veerji');
    expect(headerElement).toBeInTheDocument;
});

it("Should find boarding dropdown", () => {
    render(<Home />);
    const wrapper = screen.getByText('Boarding Type');
    expect(wrapper).toBeInTheDocument;
});

it("Should find Location dropdown", () => {
    render(<Home />);
    const wrapper = screen.getByText('Location');
    expect(wrapper).toBeInTheDocument;
});

it("Should find Adults dropdown", () => {
    render(<Home />);
    const wrapper = screen.getByText('Adults');
    expect(wrapper).toBeInTheDocument;
});

it("Should find Infants dropdown", () => {
    render(<Home />);
    const wrapper = screen.getByText('Infants');
    expect(wrapper).toBeInTheDocument;
});

it("Should find Search button", () => {
    render(<Home />);
    const wrapper = screen.getByText('Search');
    expect(wrapper).toBeInTheDocument;
});

it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Home />);
    fireEvent.click(screen.getByText('Search'));
    expect(handleClick).toHaveBeenCalledTimes(0);
});