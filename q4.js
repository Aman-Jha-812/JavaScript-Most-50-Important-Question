// Create a function that takes an array containing both numbers and string and returns a new array containing only string values?

function findstr (arr){
return arr.filter((element)=>{
return typeof element === "string"
})
}
let arr = ["aman",21,"jha",34,"aditya",45,"vats"]
let ans = findstr(arr)
console.log(ans)
console.log(arr)