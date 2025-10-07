// map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map also takes call back function
// map automatically returns the value when there is no scope
const nums = myNums.map( (num) => num + 10)
console.log(nums);

// Using forEach for above 
const newNu = [] 
myNums.forEach( (num) =>  {
    newNu.push(num+10)
})
console.log(newNu);

// Mostly used in real world
// Chaining of methods
const neNum = myNums
                .map( (num) => num*10) // every num is multiplied by 10
                .map( (num) => num+1) // after multiply, every num is increased by 1
                .filter( (num) => num > 40) // after above method, now it will return only those numbers greater than 40 
console.log(neNum);
