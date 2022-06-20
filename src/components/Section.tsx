import { alignFull, alignNormal, alignWide } from "../utils/style/blocks";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface IContentProps {
	$align: "full" | "normal" | "wide";
}

const Content = styled("div")<IContentProps>`
	${({ $align }) => {
		switch ($align) {
			case "full":
				return alignFull;

			case "wide":
				return alignWide;

			default:
				return alignNormal;
		}
	}};
`;

interface IWrapperProps {
	$background?: "primary" | "secondary" | "tertiary";
}

const Wrapper = styled("section")<IWrapperProps>`
	background-color: ${({ $background }) =>
		$background ? `var(--custom--color--${$background})` : "none"};
	color: ${({ $background }) =>
		$background ? `var(--custom--color--${$background}-copy)` : "inherit"};
	padding-bottom: ${({ $background }) =>
		$background ? "var(--global--spacing--small)" : "0"};
	padding-top: ${({ $background }) =>
		$background ? "var(--global--spacing--small)" : "0"};

	&:not(:last-child) {
		margin-bottom: var(--global--spacing--x-large);
	}

	&[data-hasbackground="true"] + &[data-hasbackground="true"] {
		margin-top: calc(-1 * var(--global--spacing--x-large));
	}
`;

interface ISectionProps {
	align?: "full" | "normal" | "wide";
	background?: "primary" | "secondary" | "tertiary";
	children: React.ReactNode;
	id?: string;
}

class Section extends React.Component<ISectionProps> {
	static propTypes = {
		align: PropTypes.oneOf(["full", "normal", "wide"]),
		children: PropTypes.node,
	};

	render(): React.ReactNode {
		const { align, background, children, id } = this.props;

		return (
			<Wrapper
				data-hasbackground={!!background}
				id={id}
				$background={background}
			>
				<Content $align={align || "normal"}>{children}</Content>
			</Wrapper>
		);
	}
}

export { Section };
