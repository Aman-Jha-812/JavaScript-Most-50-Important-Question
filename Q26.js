//Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

let sentence = "hey i Am manas kumar lal"

const capitalized = (sentence)=>{
let resultArr = sentence.split(' ').map(word => {
return word.charAt(0).toUpperCase() + word.slice(1)
} )
return (resultArr.join(' '))
}

let result = capitalized(sentence)
console.log(result)