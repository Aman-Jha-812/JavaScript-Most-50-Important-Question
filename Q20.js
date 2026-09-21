//What is the difference between slice and splice?

//slice (cut) work on both array and string  . slice not changes in original array and string
// let string = "manas";
// console.log(string.slice(1)) //anas

// console.log(string.slice(1,3))//an

// console.log(string.slice(-4)) //anas

// let arr = ['m','a','n','a','s']
// console.log(arr.slice(1)) //[ 'a', 'n', 'a', 's' ]

// Splice (cut,add,update) 



let arr1 = ['m','a','n','a','s']

let test = arr1.splice(1,2)
// return delete 
console.log(test) //[ 'a', 'n' ]
let test1 = arr1.splice(1,0, "z",'y') //its add item


console.log(arr1) // changes in original array

