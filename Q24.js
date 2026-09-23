// Reverse a number

function reverseNumber(num){
    return Number(num.toString().split('').reverse().join(''));
}

let reverse=reverseNumber(12345)
console.log(reverse)