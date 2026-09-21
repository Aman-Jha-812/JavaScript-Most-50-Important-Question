
//Why does 0.1 + 0.2 !== 0.3 in javascript (floating point precision issuen in js)

// console.log(0.1+0.2 !== 0.3)
// console.log(0.1 + 0.2) //0.30000000000000004

//Q19....

// let sum = (0.1 + 0.2).toFixed(2)
// console.log( typeof sum) //string

// let sum = Number((0.1 + 0.2).toFixed(2))
// console.log(sum === 0.3)

//use library 

let Decimal = require('decimal.js')

let num1 = Decimal(0.1);
let num2 = Decimal(0.2);

console.log(typeof num1 , typeof num2)



let sum = (num1+num2)//this concat num1 and num2
console.log(sum)

// because num1 and num2 is object due to decimal thats why we use this object method plus
let sum1 = num1.plus(num2)
console.log(Number(sum1))