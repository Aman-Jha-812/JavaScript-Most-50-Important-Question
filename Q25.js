// Write a javascript function that returns a passed string with letters in alphabetical order.


// let str = 'manas'
// let arr = str.split('').sort().join('')
// console.log(arr)

let string = "manas kumar lal"

function sortInAlphabeticalOrder(string){
  //return  string.split('').sort().join('')

  return (string.split(' ').sort().join(' '))
}
let result = sortInAlphabeticalOrder(string)
console.log(result)