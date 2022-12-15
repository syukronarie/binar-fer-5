import React from "react";
import { useSelector } from "react-redux";

const Count2 = () => {
  const count = useSelector((state) => state.count);
  return <div>Count2 {count}</div>;
};

export default Count2;
