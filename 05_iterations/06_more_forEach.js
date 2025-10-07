// forEach does not return anything 

// const coding = ["js", "ts", "java", "python", "cpp"]

// const val = coding.forEach( (item) => {
    // console.log(item);
//     return item 
// })
// console.log(val); // output -> undefined


// filter() returns values
// filter also takes call back function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nums = myNums.filter( (nums) => nums > 5 ) // no need of return as no scopes are there

const nums = myNums.filter( (nums) => {
    return nums > 5
} )
// without return -> output is []
// with return -> output is [ 6, 7, 8, 9, 10 ]
// console.log(nums); // filter returns an array of elements


// Now with forEach but need to apply condition
// const newNum = []
// nums.forEach( (num) => {
//     if (num > 5) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);


// Now again using filter
// Just like below we get data from database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBook = books.filter( (bk) => bk.genre === 'History')

userBook = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'Science'
})

console.log(userBook);
