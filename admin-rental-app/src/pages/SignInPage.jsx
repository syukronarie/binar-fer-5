import React from "react";
import APIAuth from "../apis/APIAuth";

const SignInPage = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		try {
			await APIAuth.login(Object.fromEntries(formData));
			alert("Successfully login");
		} catch (error) {
			alert("Login failed");
		}
	};

	return (
		<div>
			<h1>SignInPage</h1>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" id="email" placeholder="email" />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default SignInPage;
