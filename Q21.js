// Create a function that reverse each word of a given sentence. E.g.., Mai hun manas -> sanam nuh iam

let sentence = "Mai hun Aman Kumar Jha"
let finalResult =sentence.split(' ').map(word=>{
    let reverseWord = word.split('').reverse().join('')
    return reverseWord
}).join(' ');
console.log(finalResult)