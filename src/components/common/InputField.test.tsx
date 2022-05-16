import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

it("Should find input field value", () => {
	render(<InputField id={"testing-input"} disabled={false} className={"testing"} value={"hotel"} type={""} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
		throw new Error("Function not implemented.");
	} } />);
	const inputElement = screen.getAllByDisplayValue("hotel");
	expect(inputElement[0]).toHaveDisplayValue("hotel");
});