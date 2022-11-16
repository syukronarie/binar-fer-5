const scores = [1, 2, 3, 4, 5];

const red = scores.reduce((prev, curr) => {
	curr += prev;
	return curr;
}, 0);

console.log(red);

/*
-> prev: 0, curr: 1 -> 1
-> prev: 1, curr: 2 -> 3
-> prev: 3, curr: 3 -> 6
-> prev: 6, curr: 4 -> 10
-> prev: 10, curr: 5 -> 15
*/
