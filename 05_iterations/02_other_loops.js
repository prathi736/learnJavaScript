// while loop

let index = 0
while (index <= 10) {
    // console.log(`Value of index: ${index}`);
    index = index + 2
}

// while with array
let myArr = ["Harsh", "Venky", "Shaurya"]

let i = 0
while (i < myArr.length) {
    // console.log(myArr[i]);
    i = i+1
}


// do-while loop
// only loop to implement code first and then check the condition.
// So, atleast code runs for 1 time.
let score = 10
do {
    console.log(`Score: ${score}`);
    score++
} while (score < 10);