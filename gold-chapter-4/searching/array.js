// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.includes(90));
// console.log(nums.indexOf(3));

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

// console.log(students);

// const searchValue = "more";
// const filteredStudents = students.filter((student) => {
// 	const expression = `.*${searchValue.toLowerCase()}.*`;
// 	const re = new RegExp(expression, "g");
// 	if (
// 		re.test(student.firstName.toLowerCase()) ||
// 		re.test(student.lastName.toLowerCase())
// 	)
// 		return student;
// });

// console.log(filteredStudents);

const id = 2;
const filteredStudentsExceptIdTwo = students.filter((val) => val.id !== id);
console.log(filteredStudentsExceptIdTwo);
