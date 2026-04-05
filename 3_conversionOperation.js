let score = "33abc"

console.log(typeof score);
// or we can write it as method
console.log(typeof(score));

//Converting string to number

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan (not a number) type is number
// true => 1 ; false => 0

let a = 1
let booleanA = Boolean(a);

console.log(a);
console.log(typeof a);

let str = "";
let booleanStr = Boolean(str);
console.log(booleanStr);
console.log(typeof booleanStr);

// 1 => true ; 0 => false
// "" => false ; "lsafnf" => true

let num = 33;
let stringNum = String(33);
console.log(stringNum);
console.log(typeof stringNum);

// "33" => 33


let temp = null;
let booleanTemp = Boolean(undefined);

console.log(booleanTemp);
console.log(typeof  booleanTemp);

// undefined => false;
// null => false;

let flag = null;
let stringFlag = String(flag);
console.log(stringFlag);
console.log(typeof stringFlag);

// null => "null"