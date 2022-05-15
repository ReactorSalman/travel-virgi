import { render, screen } from "@testing-library/react";
import Title from "./Title";

it("Should display title", () => {
	render(<Title label={"Filter by"} className={"dummy"}/>);
	const titleElement = screen.getByText("Filter by");
	expect(titleElement).toBeInTheDocument();
});