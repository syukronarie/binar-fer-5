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
];

let templateString = "";

students.forEach((val) => {
	const { firstName, lastName, email } = val;
	templateString += `<li>Name: ${firstName} ${lastName}, Email: ${email}</li>`;
});

const elementUl = `<ul>${templateString}</ul>`;
const root = document.querySelector("#root");
root.innerHTML = elementUl;
