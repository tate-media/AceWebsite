import { css } from "styled-components";

export * from "./images";
export * from "./layout";

export const alignFull = css`
	padding-left: var(--global--spacing--outer);
	padding-right: var(--global--spacing--outer);
`;

export const alignNormal = css`
	margin-left: auto;
	margin-right: auto;
	max-width: 650px;
	padding-left: var(--global--spacing--outer);
	padding-right: var(--global--spacing--outer);
`;

export const alignWide = css`
	padding-left: var(--global--spacing--outer);
	padding-right: var(--global--spacing--outer);
	margin-left: auto;
	margin-right: auto;
	max-width: 1000px;
`;
