const students = [
	{
		id: 1,
		score: 90,
		firstName: "Richy",
		lastName: "Goldthorp",
		email: "rgoldthorp0@trellian.com",
		gender: "Male",
	},
	{
		id: 2,
		score: 70,
		firstName: "Clara",
		lastName: "McCurrie",
		email: "cmccurrie1@omniture.com",
		gender: "Female",
	},
	{
		id: 3,
		score: 80,
		firstName: "Felipa",
		lastName: "Fyfield",
		email: "ffyfield2@ucsd.edu",
		gender: "Female",
	},
	{
		id: 4,
		score: 100,
		firstName: "Ginelle",
		lastName: "Pabst",
		email: "gpabst3@histats.com",
		gender: "Female",
	},
	{
		id: 5,
		score: 50,
		firstName: "Sapphira",
		lastName: "Gallemore",
		email: "sgallemore4@seesaa.net",
		gender: "Female",
	},
];

const calScore = students.reduce((acc, curr, i) => {
	acc += curr.score;
	return acc;
}, 0);

const calScore2 = students.reduce((acc, curr, i) => (acc += curr.score), 0);

console.log({ calScore: calScore.score });
