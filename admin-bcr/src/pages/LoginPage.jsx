import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginPage() {
	return (
		<div>
			<h1>Login Page</h1>
			<Input type="email" placeholder="Enter your email" />
			<Input type="password" placeholder="Enter your password" />
			<Button name="submit" type="submit">
				Submit
			</Button>
		</div>
	);
}
