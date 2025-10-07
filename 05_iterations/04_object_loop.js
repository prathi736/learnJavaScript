const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'python',
    rb: 'ruby'
}

// for in loop not only used for Objects but also in other case as well
for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
}

// for in loop return keys where as for of loop return values

// for in loop on array
const language = ["js", "rb", "py", "cpp"]
for (const key in language) {
    // console.log(key); // returns keys
    // console.log(language[key]); // return values
}

// for in loop on map
const map = new Map()
map.set('IND', "India")
map.set('JP', "Japan")
map.set('UK', "United Kingdom")
map.set('IND', "India")

for (const key in map) {
    // console.log(key);
    // console.log(map[key]);
    // return nothing as maps are not iterable in for in loop
}