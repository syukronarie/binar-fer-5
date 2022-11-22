/**
 * @param a number
 * @param b number
 * @param callback (a: number, b:number) => number
 */
const calculateTwoNumbers = (a, b, callback) => {
	return callback(a, b);
};

const sum = (a, b) => {
	return a + b;
};

const sumResult = calculateTwoNumbers(5, 8, sum);

console.log(sumResult);
