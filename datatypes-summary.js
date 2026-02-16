// Primitive Datatypes
// 7 types
// Number => number
let num = 3;
console.log(num)
console.log(typeof num)
// String => string
let str = "fatima"
console.log(str)
console.log(typeof str)
// Boolean => boolean
let hasPreparedForHerExams = false;
console.log(typeof hasPreparedForHerExams)
// null  => object
let temp = null;
console.log(temp)
// undefined => undefined
let user;
console.log(user)
// Symbol => symbol
let sym = Symbol("abc")
console.log(sym)
// BigInt => bigint
let bigNum = 498053845n
console.log(bigNum)

// Non-primitive Datatypes
// Arrays => object
let leaders = ["Imran Khan", "Saddam Hussein", "Recep Tayyip Erdoğan", "Gamal Abdel Nasser"]
console.log(leaders)
// Function => function
function add(firstNum, secNum) {
    let finalVal = firstNum + secNum
    console.log(finalVal)
}
add(0, 5)
// Object  => object
let student = {
    name: "yousaf",
    class: 8
}
console.log(student)
console.log(typeof student)