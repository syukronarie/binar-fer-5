import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<h3>404 - Page not found</h3>
			<h1>It looks like you are lost</h1>
			<Link to="/">Back to Homepage</Link>
		</div>
	);
};

export default NotFound;
