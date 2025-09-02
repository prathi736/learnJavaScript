const marvel_heroes = ["ironman", "thor", "dr. strange"]
const dc_heroes = ["superman", "batman"]

// Array within another array
marvel_heroes.push(dc_heroes)  
// merges new items or arrays to the last of existing array

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]); // Not good way to access value

// Using concat operator (limit to concat only 1 array)
const allHeroes = marvel_heroes.concat(dc_heroes)
// Combines two or more arrays & returns the new array

console.log(allHeroes);


// Using spread operator (there is no limit to concat the array)
// This operator spread all the values of array
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);

// Another array
const arr = [1, 2, 4, [6, 7, 5, 6, 11], 8, [10, 3, 5, [2, 8, 4]]]

const arr1 = arr.flat(Infinity) 
// Here used depth=Infinity, but always give the depth to which you want access values
console.log(arr1);


// Mostly used at the time of data scraping

console.log(Array.isArray("Pulkit"));
console.log(Array.from("Pulkit"));

// Interesting case -> returns this []
console.log(Array.from({name: "Pulkit"})); 

let score1 = 200
let score2 = 300
let score3 = 400

// of -> Set of elements includes in the array
// & returns the new array of these elements
console.log(Array.of(score1, score2, score3));

