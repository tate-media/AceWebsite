import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface IMenuLinkProps {
	$type?: "link" | "button";
}

const MenuLink = styled(Link)<IMenuLinkProps>`
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	${({ $type }) => {
		if ($type === "button") {
			return `
				background-color: var(--custom--color--secondary);
				border-radius: 4px;
				padding: 0.25em;

				&:hover {
					text-decoration: none;
				}
			`;
		}
	}};
`;

const ListItem = styled("li")`
`;

const List = styled("ul")`
	align-items: center;
	display: flex;
	gap: var(--global--spacing--gap);
	list-style: none;
	margin: 0;
	padding: 0;
`;

const StaticMenu = styled("nav")``;

const Wrapper = styled("div")`
`;

interface IMenuProps {
	data?: {
		wpMenu?: {
			menuItems: {
				nodes: {
					id: string;
					label: string;
					path: string;
				}[];
			};
			name: string;
		};
	};
}

class Menu extends React.Component<IMenuProps> {
	static propTypes = {
		data: PropTypes.shape({
			wpMenu: PropTypes.shape({
				menuItems: PropTypes.shape({
					nodes: PropTypes.arrayOf(
						PropTypes.shape({
							id: PropTypes.string.isRequired,
						})
					).isRequired,
				}).isRequired,
				name: PropTypes.string.isRequired,
			}),
		}),
	};

	render(): React.ReactNode {
		const { data } = this.props;

		return data?.wpMenu ? (
			<Wrapper>
				<StaticMenu>
					<List>
						{data.wpMenu.menuItems.nodes.map(({ id }) => (
							<ListItem key={id}>
								<MenuLink to={"/"}>Link</MenuLink>
							</ListItem>
						))}
					</List>
				</StaticMenu>
			</Wrapper>
		) : (
			<Wrapper>
				<StaticMenu>
					<List>
						<ListItem>
							<MenuLink to={"#contact"} $type={"button"}>
								Get in touch
							</MenuLink>
						</ListItem>
					</List>
				</StaticMenu>
			</Wrapper>
		);
	}
}

export { Menu };
