// Create a function that returns the last element of an array?



function findLast (arr){
return(arr[arr.length-1])
// return arr.pop()// we dont use this because it change the original array also 
}

let lastelem=findLast([24,44,56,78,98])
console.log(lastelem)

// let arr = [24,44,56,78,98];
// console.log(arr[arr.length-1]); // this is the logic for simple printing last element of an array