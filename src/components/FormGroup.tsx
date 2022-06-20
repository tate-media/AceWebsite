import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Label = styled("label")`
	display: block;
	font-size: var(--global--font-size--small);
	line-height: var(--global--line-height--normal);
`;

const Wrapper = styled("div")`
	margin-bottom: var(--global--spacing--gap);
`;

interface IFormGroupProps {
	children: React.ReactNode;
	label: string;
	labelFor: string;
}

class FormGroup extends React.Component<IFormGroupProps> {
	static propTypes = {
		children: PropTypes.node,
		label: PropTypes.string.isRequired,
		labelFor: PropTypes.string.isRequired,
	};

	render(): React.ReactNode {
		const { children, label, labelFor } = this.props;

		return (
			<Wrapper>
				<Label htmlFor={labelFor}>{label}</Label>

				{children}
			</Wrapper>
		);
	}
}

export { FormGroup };
