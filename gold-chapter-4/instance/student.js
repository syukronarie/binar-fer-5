class Student {
	static grade = "A";
	constructor(name, gender, email) {
		this.name = name;
		this.gender = gender;
		this.email = email;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
		return this.name;
	}

	getGender() {
		return this.gender;
	}

	setGender(gender) {
		this.gender = gender;
		return this.gender;
	}

	getEmail() {
		return this.email;
	}

	setEmail(email) {
		this.email = email;
		return this.email;
	}

	getStudentDetail() {
		return {
			name: this.name,
			gender: this.gender,
			email: this.email,
		};
	}
}

const student = new Student("Reza", "Male", "reza@mama.com");

console.log(student);

console.log(student.getName());

console.log(Student.grade);

student.setName("Sahrul");
student.setEmail("sahrul@papa.com");

console.log(student.getName());

console.log(student.getStudentDetail());


