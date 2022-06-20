import {
	alignFull,
	alignWide,
	blocks,
	columns,
	containers,
	images,
} from "./blocks";
import { FontCopy } from "./fonts";
import { createGlobalStyle } from "styled-components";

export * from "./breakpoints";
export * from "./fonts";

export const GlobalStyle = createGlobalStyle`
	:root {
		--global--color--background: ${({ theme }) =>
			`${theme.colors?.background || "#fff"}`};
		--global--color--foreground: ${({ theme }) =>
			`${theme.colors?.foreground || "#000"}`};
		--custom--color--primary: ${({ theme }) =>
			`${theme.colors?.primary || "#25003e"}`};
		--custom--color--primary-copy: #fff;
		--custom--color--secondary: ${({ theme }) =>
			`${theme.colors?.secondary || "#e57a44"}`};
		--custom--color--secondary-copy: #fff;
		--custom--color--tertiary: ${({ theme }) =>
			`${theme.colors?.tertiary || "#e5e5e5"}`};
		--custom--color--tertiary-copy: #000;

		--global--font-family--copy: "Cantarell", sans-serif;
		--global--font-family--heading: "Source Serif Pro", serif;

		--global--font-size--small: 1rem;
		--global--font-size--medium: 1.125rem;
		--global--font-size--large: 1.75rem;
		--global--font-size--x-large: clamp(1.75rem, 3vw, 2.25rem);
		--custom--font-size--huge: clamp(2.25rem, 4vw, 2.75rem);
		--custom--font-size--gigantic: clamp(2.75rem, 6vw, 2.35rem);
		--custom--font-size--colossal: clamp(3.25rem, 8vw, 6.25rem);

		--global--letter-spacing--small: -0.015em;
		--global--letter-spacing--medium: -0.03em;
		--global--letter-spacing--large: -0.04em;
		--global--letter-spacing--x-large: -0.05em;
		--custom--letter-spacing--huge: 0;
		--custom--letter-spacing--gigantic: 0;
		--custom--letter-spacing--colossal: 0;

		--global--line-height--tiny: 1.15;
		--global--line-height--small: 1.2;
		--global--line-height--medium: 1.4;
		--global--line-height--normal: 1.6;

		--global--spacing--gap: 1.5rem;
		--global--spacing--small: max(1.25rem, 5vw);
		--global--spacing--medium: clamp(2rem, 8vw, calc(4 * var(--global--spacing--gap)));
		--global--spacing--large: clamp(4rem, 10vw, 8rem);
		--global--spacing--x-large: clamp(8rem, 12vw, 12rem);
		--global--spacing--outer: var(--global--spacing--small, 1.25rem);
	}

	body {
		${FontCopy("medium")}

		background-color: var(--global--color--background);
		color: var(--global--color--foreground);
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--global--font-family--heading);
		font-weight: 300;
		letter-spacing: 0;
		line-height: 1;
		margin: 1em 0 0.5em;

		&:first-child {
			margin-top: 0;
		}
	}

	h2 {
		font-size: var(--custom--font-size--gigantic);
		letter-spacing: var(--custom--letter-spacing--gigantic);
	}

	h3 {
		font-size: var(--global--font-size--x-large);
		letter-spacing: var(--global--letter-spacing--x-large);
	}

	p {
		font-size: var(--global--font-size--medium);
		letter-spacing: var(--global--letter-spacing--medium);
		line-height: var(--global--line-height--normal);
	}

	a {
		text-decoration-thickness: 1px;
		text-underline-offset: 0.25ch;
	}

	${images};

	.alignwide {
		${alignWide};
	}

	.alignfull {
		${alignFull};
	}

	${columns};

	${containers};

	${blocks};
`;
