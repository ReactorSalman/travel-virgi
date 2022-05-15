import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import Home from './Home';

it("Should find header", () => {
	render(<Home />);
	const headerElement = screen.getByText('Travel Veergi');
	expect(headerElement).toBeInTheDocument;
});

it("Should find Booking Type input label", () => {
	render(<Home />);
	const wrapper = screen.getByText("Booking Type");
	expect(wrapper).toBeInTheDocument;
});

it("Should find Booking Type input value", () => {
	render(<Home />);
	const inputField = screen.findByDisplayValue("hotel");
	expect(inputField).toBeInTheDocument;
});

it("Should find Location dropdown label", () => {
	render(<Home />);
	const wrapper = screen.getByText("Location");
	expect(wrapper).toBeInTheDocument;
});

it("Should find Location input value", () => {
	render(<Home />);
	const inputField = screen.findByDisplayValue("new-york");
	expect(inputField).toBeInTheDocument;
});

it("Should find Adults dropdown label", () => {
	render(<Home />);
	const wrapper = screen.getByText("Adults");
	expect(wrapper).toBeInTheDocument;
});

it("Should find Adults input value", () => {
	render(<Home />);
	const inputField = screen.findByDisplayValue("1");
	expect(inputField).toBeInTheDocument;
});

it("Should find Infants dropdown label", () => {
	render(<Home />);
	const wrapper = screen.getByText("Infants");
	expect(wrapper).toBeInTheDocument;
});

it("Should find Infants input value", () => {
	render(<Home />);
	const inputField = screen.findByDisplayValue("2");
	expect(inputField).toBeInTheDocument;
});

it("Should find Date picker label", () => {
	render(<Home />);
	const wrapper = screen.getByText("Checkin date");
	expect(wrapper).toBeInTheDocument;
});

it("Should find Date picker input value", () => {
	render(<Home />);
	const inputField = screen.findByDisplayValue("17/05/2024");
	expect(inputField).toBeInTheDocument;
});

it("Should find Search button label", () => {
	render(<Home />);
	const wrapper = screen.getByText("Search");
	expect(wrapper).toBeInTheDocument;
});

it("calls onClick prop when clicked", () => {
	const handleClick = jest.fn();
	render(<Home />);
	fireEvent.click(screen.getByText("Search"));
	expect(handleClick).toHaveBeenCalledTimes(0);
});