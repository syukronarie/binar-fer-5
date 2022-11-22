// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

// function vowels(str) {
// 	let count = 0;
// 	const vocals = "aiueo".split("");
// 	for (let char of str.toLowerCase()) {
// 		if (vocals.includes(char)) count++;
// 	}
// 	return count;
// }

function vowels(str) {
	const vowelsRegex = /[aiueo]/gi;
	const vowelString = str.match(vowelsRegex);
	return vowelString.length;
}

console.log(vowels("I am a world-class developer using iterations")); // 16
