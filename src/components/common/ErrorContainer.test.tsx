import { render, screen } from "@testing-library/react";
import ErrorContainer from "./ErrorContainer";

it("Should display error message", () => {
	render(<ErrorContainer label={"No data found!"} className={"dummy"}/>);
	const buttonElement = screen.getByText(/No data found!/i);
	expect(buttonElement).toBeInTheDocument();
});