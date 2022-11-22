const students = [];

function getData(form) {
	const formData = new FormData(form);
	const student = Object.fromEntries(formData);
	students.push(student);
	return students;
}

document.getElementById("studentForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const students = getData(e.target);
	const data = students[students.length - 1];
	const tr = document.createElement("tr");
	const tdNo = document.createElement("td");
	tdNo.textContent = ++students.length;
	tr.append(tdNo);
	for (let val of Object.values(data)) {
		const td = document.createElement("td");
		td.textContent = val;
		tr.append(td);
	}
	const tableStudent = document.getElementById("tableStudents");
	tableStudent.append(tr);
});
