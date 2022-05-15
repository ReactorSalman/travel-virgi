import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

it("Should find search button", () => {
	render(<Button id={''} disabled={false} className={''} onClick={function (event: any): void {
		throw new Error("Function not implemented.");
	}} />);
	const buttonElement = screen.getByText(/Search/i);
	expect(buttonElement).toBeInTheDocument();
});