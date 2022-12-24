import React from "react";
import Auth from "../utils/Auth";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Navbar</h1>
			<ul>
				<li>
					<Link to="/">Dashboard</Link>
				</li>
				<li>
					<Link to="/list-cars">Cars</Link>
				</li>
				{Auth.isAuthorization() && (
					<li>
						<button onClick={() => Auth.logOut(navigate)}>LogOut</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar;
