import { render, screen } from "@testing-library/react";
import Input from "../components/Input";

describe("Input Test", () => {
	it("should render input correctly without error", () => {
		render(<Input />);
		expect(
			screen.getByPlaceholderText(/please input field/i)
		).toBeInTheDocument();
	});
});
