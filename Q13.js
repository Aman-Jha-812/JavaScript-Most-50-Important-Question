// Write a function tha check the all element in an array are numbers.

let array = [1,4,5,6,'a',7,3]


function check (array){
// pehla tarika
    // let isNumber = true;
    // array.forEach(element => {
    //     if(typeof element !== 'number'){
    //         isNumber=false;
    //     }
    // });
    // return isNumber;

//2 tarika 

    let isnumber = array.every(elem=> typeof elem === 'number');
    return (isnumber)
}

console.log(check(array));