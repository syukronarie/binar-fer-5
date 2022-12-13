import React from "react";
import { Link } from "react-router-dom";
import iconCartSvg from "../assets/cart-shopping-solid.svg";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<Link to="/">
				<h1>EC</h1>
			</Link>
			<div className="cart">
				<span>10</span>
				<Link to="/cart">
					<img srcSet={iconCartSvg} alt="cart-icon" width="25px" />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
