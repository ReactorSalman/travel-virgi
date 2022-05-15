import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("Should display site header", () => {
	render(<Header label={"Travel Veergi"} className={"dummy"}/>);
	const buttonElement = screen.getByText("Travel Veergi");
	expect(buttonElement).toBeInTheDocument();
});