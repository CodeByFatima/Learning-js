let score = "33";
// console.log(typeof score) //type is string

// node index.js

let valInNumber = Number(score)
// console.log(typeof valInNumber) //type is now a number

let isLoggedIn = 0;
let convertIt = Boolean(isLoggedIn)
// console.log(convertIt) //converted into boolean

//Operations

let val = 3;
let negVal = -val;
// console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2/2)
// console.log(2*2)
// console.log(2**2) //power
// console.log(2%2) //remainder


// Prefix nd postfix
let gameCounter = 100;
++gameCounter;
// console.log(gameCounter)

//postfix
let x = 1;
let result = x++;
console.log(result); //original val is printed first
console.log(x);      //modified val


//prefix
let y = 1;
let resultY = ++y;
console.log(resultY); //gets modified
console.log(y);     //modified becomes original and gets printed
