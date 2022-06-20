import { render, screen } from "@testing-library/react";
import { Main } from "../Main";
import React from "react";

const testContent = <div data-testid={"test-content"}>Test content</div>;

describe("Main", () => {
	it("should render a main", () => {
		render(<Main>{testContent}</Main>);
		const main = screen.getByRole("main");

		expect(main).toBeInTheDocument();
	});

	it("should render its children", () => {
		render(<Main>{testContent}</Main>);
		const content = screen.getByTestId("test-content");

		expect(content).toHaveTextContent("Test content");
	});
});
