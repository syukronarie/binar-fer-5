import React from "react";
import { Link, useNavigate } from "react-router-dom";
import APIAuth from "../apis/admin/APIAuth";

const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		try {
			await APIAuth.login({ email, password });
			navigate("/");
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleLogin}>
				<input type="email" name="email" id="email" placeholder="email" />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
				/>
				<button type="submit">Login</button>
			</form>
			<br />
			<Link to="/">back to home</Link>
		</div>
	);
};

export default LoginPage;
