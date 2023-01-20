import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form aria-label="login-form" onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Enter your email" />
        <Input type="password" name="password" placeholder="Enter your password" />
        <Button name="submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
