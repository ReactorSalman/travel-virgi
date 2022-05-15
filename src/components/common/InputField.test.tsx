import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

it("Should find input field value", () => {
	render(<InputField id={"testing-input"} disabled={false} className={"testing"} value={"hotel"} />);
	const inputElement = screen.getAllByDisplayValue("hotel");
	expect(inputElement[0]).toHaveDisplayValue("hotel");
});