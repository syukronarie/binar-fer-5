/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function LoginUsingGoogle() {
  return (
    <div>
      <h1>Login Using Google</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    </div>
  );
}

export default LoginUsingGoogle;
