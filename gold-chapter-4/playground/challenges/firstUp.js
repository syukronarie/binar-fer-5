// Write a function that returns the provided string with
// the first letter of each word uppercase. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD shoUt') --> 'Short And Shout'

// const sentence = "sHoRt AnD shoUt";
const sentence = "I'm a little tea pot";

function capitalize(sentence) {
	const newSentence = sentence.split(" ");
	return newSentence
		.map((element) => {
			return element[0].toUpperCase() + element.slice(1).toLowerCase();
		}) // ["I'm", "A", "Little", "Tea", "Pot"]
		.join(" ");
}

console.log(capitalize(sentence)); // "I'm A Little Tea Pot"
