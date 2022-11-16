function Student(name, gender, email) {
	let _name = name;
	let _gender = gender;
	let _email = email;
	return {
		getName() {
			return name;
		},
		setName(name) {
			_name = name;
			return name;
		},
		getGender() {
			return gender;
		},
		setGender(gender) {
			_gender = gender;
			return gender;
		},
		getEmail() {
			return email;
		},
		setEmail(email) {
			_email = email;
			return email;
		},
		getStudentDetail() {
			return {
				name: _name,
				gender: _gender,
				email: _email,
			};
		},
	};
}

const student = new Student("Reza", "Male", "reza@mama.com");
console.log(student.getStudentDetail());

student.setName("Sahrul");
student.setGender("Male");
student.setEmail("sahrul@papa.com");

console.log(student.getName());
console.log(student.getStudentDetail());

console.log(student.getNameAndGender());
