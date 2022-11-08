const now = new Date();
const firstNov = new Date("01-11-2022");
const secondNov = new Date("02-11-2022");

const dates = [firstNov, now, secondNov];
console.log(dates);
// dates.sort((a, b) => a - b);
dates.sort((a, b) => b - a);

console.log(dates);
