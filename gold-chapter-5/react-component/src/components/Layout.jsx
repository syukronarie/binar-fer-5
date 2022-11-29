import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
	return (
		<>
			<Navigation />
			<Container>
				{children}
				<Footer />
			</Container>
		</>
	);
};

export default Layout;
