import React, { InputHTMLAttributes } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled("input")`
	background-color: #fafafa;
	border: 1px solid #eee;
	border-radius: 4px;
	box-sizing: border-box;
	display: block;
	font-family: var(--global--font-family--copy);
	font-size: var(--global--font-size--medium);
	letter-spacing: var(--global--letter-spacing--meidum);
	line-height: 1;
	padding: 0.5em;
	width: 100%;
`;

class Input extends React.Component<InputHTMLAttributes<HTMLInputElement>> {
	static propTypes = {
		type: PropTypes.string.isRequired,
	};

	render(): React.ReactNode {
		return <Wrapper {...this.props} />;
	}
}

export { Input };
