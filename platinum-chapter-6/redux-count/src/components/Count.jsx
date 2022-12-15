import React from "react";
import { useSelector } from "react-redux";

export const Count = () => {
  const count = useSelector((state) => state.count);

  return <div>Count: {count}</div>;
};
