import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
		</>
	);
};

export default Layout;
