import { breakpoints } from "../breakpoints";
import { css } from "styled-components";

export const blocks = css`
	.has-primary-background-color {
		background-color: var(--custom--color--primary);
	}

	.has-text-color {
		color: var(--global--color--background);
	}

	.wp-block-group {
		&.has-background-color {
			padding: var(--global--spacing--large) 0;
		}
	}
`;

export const columns = css`
	.wp-block-column {
		width: 100%;
	}

	.wp-block-columns {
		display: grid;
		gap: var(--global--spacing--gap);

		@media ${breakpoints("medium")} {
			display: flex;
		}
	}
`;

export const containers = css`
	[class^="wp-container-"] {
		&.alignfull {
			padding-left: 0;
			padding-right: 0;

			& > * {
				padding-left: var(--global--spacing--outer);
				padding-right: var(--global--spacing--outer);
			}
		}

		&.alignwide {
			max-width: initial;
			padding-left: 0;
			padding-right: 0;

			& > * {
				padding-left: var(--global--spacing--outer);
				padding-right: var(--global--spacing--outer);
				margin-left: auto;
				margin-right: auto;
				max-width: 1000px;
			}
		}
	}
`;
