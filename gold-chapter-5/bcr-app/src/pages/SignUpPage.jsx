import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import APIAuth from "../apis/customer/APIAuth";
import imageRightSide from "../assets/images/landingpage-for-signup.png";

const SignUp = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");

		try {
			await APIAuth.signUp({ name, email, password });
			alert("Successfully registered!");
			navigate("/login");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<Container fluid>
			<Row className="vh-100">
				<Col className="d-flex justify-content-center align-items-center ">
					<Form className="w-50" onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Enter name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Sign Up
						</Button>
					</Form>
				</Col>
				<Col className="bg-primary p-0 d-flex flex-column justify-content-end align-items-end">
					<div>
						<h1 className="align-self-start mb-5">Binar Car Rental</h1>
						<Image src={imageRightSide} alt="landing-page" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SignUp;
