const axios = require("axios");

// async function getUsers () {
// 	const respond = await axios("https://jsonplaceholder.typicode.com/users")
// 	console.log(respond.data)
// }

// const getUsers = async () => {
// 	const users = await axios("https://jsonplaceholder.typicode.com/users")
// 	const post = await axios("https://jsonplaceholder.typicode.com/posts/1")
// 	console.log(users.data);
// 	console.log(post.data);
// }

const getUsers = async () => {
	const promises = [];
	const num = 10;
	for (let i = 0; i < num; i++) {
		const post = new Promise((resolve, reject) => {
			try {
				const data = axios(
					`https://jsonplaceholder.typicode.com/posts/${i + 1}`
				);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
		promises.push(post);
	}

	const data = await Promise.all(promises);
	console.log(data);
};

console.log("Before myFunction");
getUsers();
console.log("After myFunction");
