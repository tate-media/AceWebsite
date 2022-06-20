import { Footer } from "./Footer";
import { GlobalStyle } from "../utils/style";
import { Header } from "./Header";
import { Main } from "./Main";
import React from "react";

interface ILayoutProps {
	children: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<>
				<GlobalStyle />

				<Header
					showMountains={true}
					title={"The best legal recruiters in the PNW"}
				/>

				<Main>{children}</Main>

				<Footer />
			</>
		);
	}
}

export { Layout };
