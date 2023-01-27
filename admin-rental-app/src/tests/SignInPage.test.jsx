import React from "react";
import { render, screen } from "@testing-library/react";
import SignInPage from "../pages/SignInPage";

describe("SignInPage Test", () => {
  it("should be render correctly without error", () => {
    render(<SignInPage />);
    expect(screen.getByText(/SignInPage/i)).toBeInTheDocument();
  });
});
