//Function which returns a random number in the given range
//Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(min, max) {
	// write your solution here
 return Math.floor(Math.random() * (max - min + 3)) + min
	return
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)

