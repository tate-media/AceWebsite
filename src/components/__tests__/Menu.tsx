import { render, screen } from "@testing-library/react";
import { Menu } from "../Menu";
import React from "react";

describe("Menu", () => {
	it("should render a nav menu", () => {
		render(<Menu />);
		const nav = screen.getByRole("navigation");
		const menu = screen.getByRole("list");

		expect(nav).toBeInTheDocument();
		expect(menu).toBeInTheDocument();
	});
});
