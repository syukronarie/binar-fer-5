/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export default function Input({ children, ...rest }) {
  return <input placeholder="please input field" {...rest} />;
}
