import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import React from "react";

describe("Header", () => {
	it("should render a header", () => {
		render(<Header />);
		const header = screen.getByRole("banner");

		expect(header).toBeInTheDocument();
	});

	it("should render navigation", () => {
		render(<Header />);
		const nav = screen.getByRole("navigation");

		expect(nav).toBeInTheDocument();
	});
});
