//Write a function to flatten a nested array(one level deep). (e.g., [1,[2,3],4]->[1,2,3,4])

let arr = [1,[2,3,['c','d']],4]

console.log(arr.flat(1)) // 1 level tak torta hai 
console.log(arr.flat(2)) // 2 level tak torta hai