exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	/*
	await Promise.all(
		result.data.allWpPage.nodes.map(
			async ({ id, isFrontPage, isPostsPage, slug }) =>
				await createPage({
					component: isPostsPage
						? require.resolve("./src/templates/posts.tsx")
						: isFrontPage
						? require.resolve("./src/templates/home.tsx")
						: require.resolve("./src/templates/page.tsx"),
					context: { id },
					path: isFrontPage ? "/" : slug,
				})
		)
	);

	if (!result.data.allWpPage.nodes.find(({ isFrontPage }) => !!isFrontPage)) {
		await createPage({
			component: require.resolve("./src/templates/posts.tsx"),
			path: "/",
		});
	}
	*/
};
