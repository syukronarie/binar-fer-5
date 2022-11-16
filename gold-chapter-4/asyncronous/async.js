const one = () => Promise.resolve('One')

async function myFunction() {
	console.log("inside function");
	const result = await one();
	console.log(result);
}

console.log("Before myFunction")
myFunction();
console.log("After myFunction")