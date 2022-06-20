import { alignFull, alignWide } from "../utils/style/blocks";
import { Branding } from "./Branding";
import { Menu } from "./Menu";
import PropTypes from "prop-types";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Title = styled("p")`
	font-family: var(--global--font-family--heading);
	font-size: var(--custom--font-size--colossal);
	line-height: var(--global--line-height--tiny);
	margin: 0;
`;

const TitleWrapper = styled("div")`
	${alignWide};

	margin-bottom: var(--global--spacing--small, 1.25rem);
	margin-top: var(--global--spacing--small, 1.25rem);

	&:last-child {
		padding-bottom: var(--global--spacing--small, 1.25rem);
	}
`;

const MountainsWrapper = styled("div")`
	${alignWide};

	filter: invert(1);
	opacity: 0.9;
	margin-bottom: var(--global--spacing--small, 1.25rem);
	margin-top: var(--global--spacing--small, 1.25rem);

	&:last-child {
		padding-bottom: var(--global--spacing--small, 1.25rem);
	}
`;

const Content = styled("div")`
	${alignWide};

	align-items: center;
	display: flex;
	justify-content: space-between;
`;

interface IWrapperProps {
	$removeBottomPadding?: boolean;
}

const Wrapper = styled("header")<IWrapperProps>`
	${alignFull};

	background-color: var(--custom--color--primary);
	color: var(--global--color--background);
	padding-bottom: ${({ $removeBottomPadding }) =>
		$removeBottomPadding ? "0" : "var(--global--spacing--large, 8rem)"};
	padding-top: var(--global--spacing--small, 1.25rem);
`;

interface IHeaderProps {
	showMountains?: boolean;
	title?: string;
}

class Header extends React.Component<IHeaderProps> {
	static propTypes = {
		showMountains: PropTypes.bool,
		title: PropTypes.string,
	};

	render(): React.ReactNode {
		const { showMountains, title } = this.props;

		return (
			<Wrapper $removeBottomPadding={!!showMountains || !!title}>
				<Content>
					<Branding />

					<Menu />
				</Content>

				{!!title && (
					<TitleWrapper>
						<Title>{title}</Title>
					</TitleWrapper>
				)}

				{!!showMountains && (
					<MountainsWrapper>
						<StaticImage alt={"Mountians"} src={"../graphics/mountains.png"} />
					</MountainsWrapper>
				)}
			</Wrapper>
		);
	}
}

export { Header };
