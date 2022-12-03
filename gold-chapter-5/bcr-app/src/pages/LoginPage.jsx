import React from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		Cookies.set("accessToken", "abcd1234");
		navigate("/");
	};

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={() => handleLogin()}>Login</button>
			<br />
			<Link to="/">back to home</Link>
		</div>
	);
};

export default LoginPage;
