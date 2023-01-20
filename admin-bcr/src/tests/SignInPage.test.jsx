import React from "react";
import { render, screen } from "@testing-library/react";
import SignInPage from "../pages/SignInPage";
import renderWithRouter from "../utils/testUtils";

describe("SignInPage Test", () => {
	it("should be render correctly without error", () => {
		renderWithRouter(<SignInPage />);
		expect(screen.getByText(/SignInPage/i)).toBeInTheDocument();
	});
});
