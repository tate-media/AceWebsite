import { SimpleInterpolation, css } from "styled-components";

type FontSize =
	| "small"
	| "medium"
	| "large"
	| "x-large"
	| "huge"
	| "gigantic"
	| "colossal";

const globalOrCustom = (size: FontSize): string => {
	switch (size) {
		case "huge":
		case "gigantic":
		case "colossal":
			return "custom";

		default:
			return "global";
	}
};

export const FontCopy = (
	size: FontSize
): ReadonlyArray<SimpleInterpolation> => css`
	font-family: var(--global--font-family--copy);
	font-size: var(--${globalOrCustom(size)}--font-size--${size});
	font-weight: 400;
	letter-spacing: var(--${globalOrCustom(size)}--letter-spacing--${size});
`;

export const FontHeading = (
	size: FontSize
): ReadonlyArray<SimpleInterpolation> => css`
	font-family: var(--global--font-family--heaidng);
	font-size: var(--globlal--${globalOrCustom(size)}-size--${size});
	font-weight: 300;
	letter-spacing: 0;
`;
