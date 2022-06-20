import { Link, StaticQuery, graphql } from "gatsby";
import { FontCopy } from "../utils/style";
import React from "react";
import styled from "styled-components";

const TitleLink = styled(Link)`
	color: inherit;
	text-decoration: underline;

	&:focus,
	&:hover {
		text-decoration-style: dashed;
	}
`;

const Title = styled("h1")`
	${FontCopy("medium")}

	font-style: italic;
	line-height: var(--global--line-height--normal);
	margin: 0;
`;

interface IBrandingProps {
	data: {
		site: {
			siteMetadata: {
				description: string;
				title: string;
			};
		};
	};
}

class Branding extends React.Component<IBrandingProps> {
	render(): React.ReactNode {
		const { site } = this.props.data;

		const title = site.siteMetadata.title;

		return (
			<div>
				<Title>
					<TitleLink to={"/"}>{title}</TitleLink>
				</Title>
			</div>
		);
	}
}

function getBranding(): React.ReactElement {
	const query = graphql`
		query BrandingQuery {
			site {
				siteMetadata {
					description
					title
				}
			}
		}
	`;

	return (
		<StaticQuery query={query} render={(data) => <Branding data={data} />} />
	);
}

export { getBranding as Branding };
