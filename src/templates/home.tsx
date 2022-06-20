import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
	.wp-block-column {
		&[style*="flex-basis:66.66%"] {
			padding-top: var(--global--spacing--small);
		}
	}

	.wp-block-columns {
		margin: var(--global--spacing--x-large) auto;
	}
`;

class HomeTemplate extends React.Component {
	render(): React.ReactNode {
		return (
			<Wrapper
				dangerouslySetInnerHTML={{ __html: "" }}
			/>
		);
	}
}

export default HomeTemplate;

