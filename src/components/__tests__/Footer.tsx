import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";
import React from "react";

describe("Footer", () => {
	it("should render a footer", () => {
		render(<Footer />);
		const footer = screen.getByRole("contentinfo");

		expect(footer).toBeInTheDocument();
	});
});
