const name = "kapil"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // use back ticks method instead of adding the strings

const gameName = new String('kapil')       // This creates string like c++ i.e we have indexes and methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)      // cant take negative indexing
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   kapil    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kapil.com/hitesh%20tadkase"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));