// Given an array of string return a new array where all strings are in upeer case?



function aman (arr){
    return arr.map(elem=>{
        return (elem.toUpperCase())
    })
}
let arr = ["aman",'JHA','ADITYA',"kumar"]
console.log(aman(arr))