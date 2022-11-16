/*
	Non-primitive data types in JavaScript includes:
		Objects
		Arrays
*/


// Object

const person = {
	name: "doni",
	gender: "laki-laki"
}

person.birthday = "19-11-2000"

// access object
function printObjectProperty(property){
	console.log(person[property])
}

printObjectProperty("name");

// Array
const cars = ["Saab", "BMW", "Mercedes"];

// 2D array
const numbers = [[1,2],[2,1],[4,3],[3,4]]
