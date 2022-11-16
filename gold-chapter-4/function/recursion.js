// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial(x) {
	return x === 0 ? 1 : x * factorial(x - 1);
}

const result = factorial(5);

console.log(result);
