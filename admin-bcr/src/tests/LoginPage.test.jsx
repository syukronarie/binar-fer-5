import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

describe("LoginPage Test", () => {
	it("should render component correctly", () => {
		const { container } = render(<LoginPage />);
		expect(container).toBeInTheDocument();
	});
	it("should render heading correctly", () => {
		render(<LoginPage />);
		const heading = screen.getByText(/Login Page/i);
		expect(heading).toBeInTheDocument();
	});
	it("component has input email", () => {
		render(<LoginPage />);
		const inputEmail = screen.getByPlaceholderText("Enter your email");
		expect(inputEmail).toBeInTheDocument();
		expect(inputEmail).toHaveProperty("type", "email");
	});
	it("component has input password", () => {
		render(<LoginPage />);
		const inputPassword = screen.getByPlaceholderText("Enter your password");
		expect(inputPassword).toBeInTheDocument();
		expect(inputPassword).toHaveProperty("type", "password");
	});
	it("component has submit button", () => {
		render(<LoginPage />);
		const submitButton = screen.getByRole("button", { name: /submit/i });
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toHaveProperty("type", "submit");
		expect(submitButton).toHaveTextContent("Submit");
	});
});
