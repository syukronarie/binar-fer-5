const firstName = "aRIE";
const lastName = "sYUKRON";
const dreamJob = "software engineer";

//  Result Expectation
//  My name is Arie Syukron and my dream job is Software Engineer

console.log(
	`My name is ${
		firstName[0].toUpperCase() +
		firstName.substring(1, firstName.length).toLowerCase() +
		" " +
		lastName[0].toUpperCase() +
		lastName.substring(1, lastName.length).toLowerCase()
	}`
);

console.log(
	"And my dream job is " +
		dreamJob.charAt(0).toUpperCase() +
		dreamJob.substring(1, 8) +
		" " +
		dreamJob.charAt(9).toUpperCase() +
		dreamJob.substring(10, dreamJob.length)
);
