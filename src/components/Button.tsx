import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IWrapperProps {
	$block?: boolean;
}

const Wrapper = styled("button")<IWrapperProps>`
	background-color: var(--custom--color--secondary);
	border: 0;
	border-radius: 4px;
	box-sizing: border-box;
	color: var(--custom--color--secondary-copy);
	cursor: pointer;
	display: ${({ $block }) => ($block ? "block" : "inline-block")};
	font-family: var(--global--font-family--copy);
	font-size: var(--global--font-size--large);
	letter-spacing: var(--global--letter-spacing--large);
	line-height: 1;
	padding: 0.5em;
	text-transform: uppercase;
	width: ${({ $block }) => ($block ? "100%" : "auto")};
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	block?: boolean;
}

class Button extends React.Component<IButtonProps> {
	render(): React.ReactNode {
		const { block, children, ...rest } = this.props;
		return (
			<Wrapper $block={block} {...rest}>
				{children}
			</Wrapper>
		);
	}
}

export { Button };
