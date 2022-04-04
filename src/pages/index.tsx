import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const GlobalStyle = createGlobalStyle`
	html {
		font-family: "Cantarell", sans-serif;
		font-size: 18px;
		line-height: 1.6;
	}

	body {
		background-attachment: fixed;
		background-color: #fafafa;
		background-image: url(/bg.jpg);
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	h1 {
		color: #603473;
		font-family: "Source Serif Pro", serif;
		font-size: 50px;
		font-weight: 300;
		line-height: 1.15;
	}
`;

const Content = styled("div")`
	margin: 0 auto;
	max-width: 960px;
`;

const Container = styled("div")`
	box-sizing: border-box;
	left: 0;
	padding: 60px 20px;
	position: absolute;
	top: 50%;
	transform: translate3d(0, -50%, 0);
	width: 100%;
`;

class IndexPage extends React.Component {
	render(): React.ReactNode {
		return (
			<>
				<Helmet
					htmlAttributes={{
						lang: "en",
					}}
					title={"TLG Legal Search — Coming Soon"}
				/>

				<GlobalStyle />

				<Container>
					<Content>
						<StaticImage
							alt={"TLG Legal Search logo"}
							loading={"eager"}
							placeholder={"tracedSVG"}
							src={"../../static/logo.png"}
							width={200}
						/>

						<h1>Get ready!</h1>

						<p>Something cool is coming soon.</p>
					</Content>
				</Container>
			</>
		);
	}
}

export default IndexPage;
