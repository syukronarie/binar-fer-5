import React, { useState } from "react";

const operations = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"*": (a, b) => a * b,
	"/": (a, b) => a / b,
	"%": (a, b) => a % b,
};

const action = (op, a, b) => operations[op](a, b);

const SimpleCalculator = () => {
	const [calculate, setCalculate] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const a = Number(formData.get("a"));
		const b = Number(formData.get("b"));
		const opt = formData.get("operator");
		const res = action(opt, a, b);
		setCalculate({ a, b, opt, result: res });
	};

	return (
		<div>
			<h1>Simple Calculator</h1>
			<form onSubmit={handleSubmit}>
				<input type="number" name="a" id="a" />
				<input type="number" name="b" id="b" />
				<select name="operator" id="operator">
					<option value="+">+</option>
					<option value="-">-</option>
					<option value="*">*</option>
					<option value="/">/</option>
					<option value="%">%</option>
				</select>
				<button type="submit">=</button>
			</form>
			{!!calculate && (
				<div>
					<h1>
						Result from {calculate.a} {calculate.opt} {calculate.b}=
						{calculate.result}
					</h1>
				</div>
			)}
		</div>
	);
};

export default SimpleCalculator;
