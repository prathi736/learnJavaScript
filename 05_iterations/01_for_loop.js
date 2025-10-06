// for loop syntax

for (let i = 0; i <=10; i++) {
    const element = i
    if (element == 5) {
        // console.log("Best Number");
    }
    // console.log(element);
}
// console.log(element);


// Nested loop
for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop vale: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Outer Loop value: ${i}`);
        // Printing table
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


// Loop working on array
let myArr = ["car", "bike", "cycle"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        break
    }
    // console.log(`Loop value: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Loop value: ${index}`);
}