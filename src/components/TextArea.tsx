import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled("textarea")`
	background-color: #fafafa;
	border: 1px solid #eee;
	border-radius: 4px;
	box-sizing: border-box;
	display: block;
	font-family: var(--global--font-family--copy);
	font-size: var(--global--font-size--medum);
	height: 6em;
	letter-spacing: var(--global--letter-spacing--medium);
	line-height: 1;
	max-height: 16em;
	min-height: 6em;
	padding: 0.5em;
	resize: vertical;
	width: 100%;
`;

class TextArea extends React.Component<
	TextareaHTMLAttributes<HTMLTextAreaElement>
> {
	render(): React.ReactNode {
		return <Wrapper {...this.props} />;
	}
}

export { TextArea };
