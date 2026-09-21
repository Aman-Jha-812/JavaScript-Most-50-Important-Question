//In an array of numbers and strings, only add those numbers which are not string.

let arr = [1,'55',3,'manas',7,1]
let sum = 0;

arr.forEach(item=>{
    if(typeof item === 'number'){
        sum += item;
    }
    
})
console.log(sum);