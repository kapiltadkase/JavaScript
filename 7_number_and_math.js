const score = 400;
console.log(score);


const balance = new Number(100)        // Another way of creating a number variable this has various attributes and method

console.log(balance) ;

console.log(balance.toString().length);

console.log(balance.toFixed(1));    // How many digit we want after decimal

const otherNumber = 123.98374;
console.log(otherNumber.toPrecision(4))   // return the first 4 significant digits


const hundreds = 1000000;
console.log(hundreds.toLocaleString());   // converts to 1,000,000  for 10,00,000 use 'en-IN' as argument


// ---------------------------------Maths-------------------------------------


// console.log(Math);                              // Math object with vairous methods and attributes
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                   // gives a random value between 0 and 1
console.log((Math.random()*10) + 1);               // random value between 1 and 10
console.log(Math.floor(Math.random()*10) + 1);         // integral value between 1 and 10


// To get value between a range use follwing method / formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)