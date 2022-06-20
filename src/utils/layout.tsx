import { Layout } from "../components/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";

interface IPageElementProps {
	element: React.ReactNode;
}

export const wrapPageElement = ({
	element,
}: IPageElementProps): React.ReactElement => (
	<ThemeProvider theme={{ colors: {} }}>
		<Layout>{element}</Layout>
	</ThemeProvider>
);
