/* eslint-disable prettier/prettier */
import React from "react";
import { notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { DatePicker } from "../components/DatePicker/DatePicker";

function SignInPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await APIAuth.loginAdmin(Object.fromEntries(formData));
      openNotificationWithIcon("success", "Login", "Successfully login");
      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_to");
      if (redirectTo) returnTo += `${redirectTo}`;
      setTimeout(() => {
        navigate(returnTo);
      }, 2000);
    } catch (error) {
      openNotificationWithIcon("error", "Login", "Login failed");
    }
  };

  return (
    <div>
      {contextHolder}
      <h1>SignInPage</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignInPage;
