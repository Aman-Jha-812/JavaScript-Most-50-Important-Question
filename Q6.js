//Write a function that return the length of a given object (number of keys);

const obj = {name:'aman', age:21, branch:'cse'}
//console.log(Object.keys(obj).length) // simple 
// Object.keys(obj) its give you an array like [name,age,branch]
// through function

function len(object){
    return(Object.keys(object).length)
}

let lengths=len(obj)
console.log(lengths)

//Jaise hum Math funcition ka use karte hain oise hin Object function ka bhi use karte hain
