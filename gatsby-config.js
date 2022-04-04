require("dotenv").config({});

exports.siteMetadata = {
	description: "",
	siteUrl: "https://www.tlglegalsearch.com",
	title: "TLG Legal Search",
};

exports.plugins = [
	"gatsby-plugin-gatsby-cloud",
	"gatsby-plugin-react-helmet",
	"gatsby-plugin-image",
	"gatsby-plugin-sharp",
	{
		resolve: "gatsby-plugin-styled-components",
		options: {
			displayName: process.env.NODE_ENV === "development",
		},
	},
	{
		resolve: "gatsby-plugin-robots-txt",
		options: {
			host: null,
			policy: [{ disallow: ["/"], userAgent: "*" }],
			sitemap: null,
		},
	},
	{
		resolve: "gatsby-plugin-manifest",
		options: {
			display: "browser",
			icon: "./static/icon.png",
			name: "TLG Legal Search",
		},
	},
];
