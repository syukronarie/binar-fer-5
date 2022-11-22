// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		let str = "";
		if (!(i % 3)) str += "fizz";
		if (!(i % 5)) str += "buzz";
		if (!str) str += i;
		console.log(str);
	}
}

fizzBuzz(72);
