// console.log(2 > 1);
// console.log(2 >= 1);
// console.loga(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// --------------------Comparision between different datatypes-----------------------
console.log("2" > 1);
console.log("02" > 1); // avoid comparing different datatypes

console.log(null > 0);
console.log(null == 0);   
console.log(null >= 0);  // give true because equality and comparisions works differently (null get converted to 0)

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);    // all comparision with undefined gives false


// Strict comparision (===)  i.e it checks value as well as datatype
console.log("2" === 2);