import { alignFull, alignNormal } from "../utils/style/blocks";
import React from "react";
import styled from "styled-components";

const Content = styled("div")`
	${alignFull};

	font-size: var(--global--font-size--small);
	letter-spacing: var(--global--letter-spacing--small);
	line-height: var(--global-line-height--small);
	padding-bottom: var(--global--spacing--large);
	padding-top: var(--global--spacing--large);
	text-align: center;
`;

const Wrapper = styled("footer")`
	&::before {
		${alignNormal};

		background-color: var(--custom--color--tertiary);
		content: "";
		display: block;
		height: 1px;
		width: 100%;
	}

	position: relative;
`;

class Footer extends React.Component {
	render(): React.ReactNode {
		return (
			<Wrapper>
				<Content>Copyright &copy; 2022 TLG Legal Search</Content>
			</Wrapper>
		);
	}
}

export { Footer };
