function sum(a, b) {
	if (typeof a === "number" && typeof b === "number") return a + b;
	throw new Error("parameter should be a number");
}

const hasil = sum(10, 20);

console.log(hasil);
