import { render, screen } from "@testing-library/react";
import { Layout } from "../Layout";
import React from "react";

const testContent = <div data-testid={"test-content"}>Test content</div>;

describe("Layout", () => {
	it("should render its children", () => {
		render(<Layout>{testContent}</Layout>);
		const main = screen.getByTestId("test-content");

		expect(main).toHaveTextContent("Test content");
	});

	it("should have a header", () => {
		render(<Layout>{testContent}</Layout>);
		const header = screen.getByRole("banner");

		expect(header).toBeInTheDocument();
	});

	it("should have a footer", () => {
		render(<Layout>{testContent}</Layout>);
		const footer = screen.getByRole("contentinfo");

		expect(footer).toBeInTheDocument();
	});

	it("should have a main", () => {
		render(<Layout>{testContent}</Layout>);
		const main = screen.getByRole("main");

		expect(main).toBeInTheDocument();
	});
});
