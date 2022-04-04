import React from "react";

const gatsby = jest.requireActual("gatsby");

export default {
	...gatsby,
	Link: jest.fn().mockImplementation(
		({
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			activeClassName,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			activeStyle,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			getProps,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			innerRef,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			partiallyActive,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			replace,
			to,
			...rest
		}) => React.createElement("a", { ...rest, href: to })
	),
	StaticQuery: jest.fn((mock) =>
		mock.render({
			site: {
				siteMetadata: {
					description: "Test site description",
					title: "Test Site Title",
				},
			},
		})
	),
	graphql: jest.fn(),
	useStaticQuery: jest.fn(),
};
