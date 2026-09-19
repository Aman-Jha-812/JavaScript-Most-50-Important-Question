//create a function that remove the duplicate value from an array?

function removeDuplicate(arr){
// let set = new Set(arr); //use Set method for removing duplicate value
// return[...set]

let resultantArr = arr.filter((element,index)=>{
    return arr.indexOf(element)===index
})

return resultantArr;
}
let resultArr = removeDuplicate([1,3,3,2,5,2,1,8])
console.log(resultArr)