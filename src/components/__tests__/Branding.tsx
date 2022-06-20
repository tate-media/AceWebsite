import { render, screen } from "@testing-library/react";
import { Branding } from "../Branding";
import React from "react";

describe("Branding", () => {
	it("should display the site title", () => {
		render(<Branding />);
		const title = screen.getByRole("heading");

		expect(title).toHaveTextContent("Test Site Title");
	});
});
