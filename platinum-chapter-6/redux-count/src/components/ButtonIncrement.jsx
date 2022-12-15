import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/features/countSlice";

const ButtonIncrement = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment(1))}>+ Increment</button>;
};

export default ButtonIncrement;
