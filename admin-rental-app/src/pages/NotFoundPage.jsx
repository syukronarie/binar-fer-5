import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			<h1>Page Not Found</h1>
			<p>It looks like you're lost...</p>
			<Link to="/">back to Home</Link>
		</div>
	);
};

export default NotFoundPage;
