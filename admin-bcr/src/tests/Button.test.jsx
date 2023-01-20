import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Test", () => {
	it("should be match with the snapshot", () => {
		render(<Button type="submit">Submit</Button>);
		expect(screen.getByText(/submit/i)).toMatchSnapshot();
	});
	it("should render button correctly without error", () => {
		render(<Button>Submit</Button>);
		expect(screen.getByText(/submit/i)).toBeInTheDocument();
	});
});
