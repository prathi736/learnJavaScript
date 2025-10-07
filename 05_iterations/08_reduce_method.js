// reduce method
// mostly used in the case of shopping cart
// it also takes call back function
const myNums = [1, 2, 3]

// Using normal function:-
// const mySum = myNums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

// Using arrow function:-
const mySum = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(mySum);


// Real life example of shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 4999
    },
    {
        itemName: "cyber security course",
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)

console.log(priceToPay);
