// Object declaration using constructor

// Declared the object
const accUser = new Object()

// added items in accUser
accUser.id = "124bvc"
accUser.name = "Don"
accUser.loggedIn = true

console.log(accUser);

// Empty object -> returns -> {}


// Object inside object

const regUser = {
    fullname : {
        userfullname : {
            firstname: "Billu",
            lastname: "Don"
        }
    }
}

// accessing object inside object
// console.log(regUser.fullname?.userfullname.lastname);
// (?) -> is used as a protection while fetching information from API in objects
// whether (fullname) exist or not inside the API information


// Merging two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// This is problematic
const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

// More correct one
const obj5 = Object.assign({}, obj1, obj2)
// merge obj1 & obj2 & put it into this -> {}
// {} -> target
// obj1 & obj2 -> sources
console.log(obj5);

// Mostly used syntax for merging objects -> spread operator
const obj6 = {...obj1, ...obj2}
console.log(obj6);


// data coming from database 
// mostly coming as [Array Object]
const users = [
    {
        id : 1,
        email: "abac@abnc.com"
    },
    {
        id : 2,
        email: "abac@abnc.com"
    },
    {
        id : 3,
        email: "abac@abnc.com"
    },
]
// to access users
console.log(users[1].id)

console.log(accUser);
console.log(Object.keys(accUser)); // returns the array of keys
console.log(Object.values(accUser)); // returns the array of values
console.log(Object.entries(accUser)); // returns array inside array of key:value pairs

// Returns a boolean value whether the property exist or not in the given object
console.log(accUser.hasOwnProperty('id'));
