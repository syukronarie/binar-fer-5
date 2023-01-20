import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
    expect(inputEmail).toHaveProperty("name", "email");
  });

  it("component has input password", () => {
    render(<LoginPage />);
    const inputPassword = screen.getByPlaceholderText("Enter your password");
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveProperty("type", "password");
    expect(inputPassword).toHaveProperty("name", "password");
  });

  it("component has submit button", () => {
    render(<LoginPage />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveProperty("type", "submit");
    expect(submitButton).toHaveTextContent("Submit");
  });

  it("component has a form", () => {
    render(<LoginPage />);
    const form = screen.getByRole("form", { name: /login-form/ });
    expect(form).toBeInTheDocument();
  });

  it("change input email working correctly", () => {
    render(<LoginPage />);
    const inputEmail = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(inputEmail, { target: { value: "hello@mail.com" } });
    expect(inputEmail).toHaveValue("hello@mail.com");
  });

  it("change input password working correctly", () => {
    render(<LoginPage />);
    const inputPassword = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(inputPassword, { target: { value: "hello1234" } });
    expect(inputPassword).toHaveValue("hello1234");
  });

  it("form working correctly when button submit is clicked", () => {
    render(<LoginPage />);
    const inputEmail = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(inputEmail, { target: { value: "hello@mail.com" } });
    expect(inputEmail).toHaveValue("hello@mail.com");

    const inputPassword = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(inputPassword, { target: { value: "hello1234" } });
    expect(inputPassword).toHaveValue("hello1234");

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    const form = screen.getByRole("form", { name: /login-form/ });
    const formData = new FormData();
    formData.set("email", "hello@mail.com");
    formData.set("password", "hello1234");
    expect(form).toHaveFormValues(formData);
  });
});
