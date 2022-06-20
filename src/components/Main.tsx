import React from "react";
import styled from "styled-components";

const Wrapper = styled("main")`
	margin: var(--global--spacing--large) 0;
`;

interface IMainProps {
	children: React.ReactNode;
}

class Main extends React.Component<IMainProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return <Wrapper>{children}</Wrapper>;
	}
}

export { Main };
