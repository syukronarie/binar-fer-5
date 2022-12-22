import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../../store/features/countSlice";

const ButtonDecrement = () => {
	const dispatch = useDispatch();
	return <button onClick={() => dispatch(decrement(1))}>- Decrement</button>;
};

export default ButtonDecrement;
