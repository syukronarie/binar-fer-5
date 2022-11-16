const students = [
	{
		id: 1,
		firstName: "Richy",
		lastName: "Goldthorp",
		email: "rgoldthorp0@trellian.com",
		gender: "Male",
	},
	{
		id: 2,
		firstName: "Clara",
		lastName: "McCurrie",
		email: "cmccurrie1@omniture.com",
		gender: "Female",
	},
	{
		id: 3,
		firstName: "Felipa",
		lastName: "Fyfield",
		email: "ffyfield2@ucsd.edu",
		gender: "Female",
	},
	{
		id: 4,
		firstName: "Ginelle",
		lastName: "Pabst",
		email: "gpabst3@histats.com",
		gender: "Female",
	},
	{
		id: 5,
		firstName: "Sapphira",
		lastName: "Gallemore",
		email: "sgallemore4@seesaa.net",
		gender: "Female",
	},
];

students.map((student, i) => {
	if (student.id === 3) {
		student.gender = "Male";
		student.birthday = "20-11-2000";
	}
	return student;
});

// console.log(students);

// const data = [];
// students.forEach((value, i) => {
// 	if (value.id % 2 === 0) {
// 		value.gender = "Male";
// 		data.push(value);
// 	}
// });

// console.log(data);

console.log(students);
