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

function searchStudentsByGender(gender) {
	return students.filter(
		(student) => student.gender.toLowerCase() === gender.toLowerCase()
	);
}

const gender = "feMaLE";

const filterStudent = searchStudentsByGender(gender);

if (filterStudent.length > 0) {
	console.log(`students ${gender} ditemukan`);
	console.log(filterStudent);
} else {
	console.log(`students ${gender} tidak ditemukan`);
}
