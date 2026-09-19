//Check if an object is empty(has no keys).

const obj ={name:'aman'}

let keysArr = Object.keys(obj);
let isEmpetyObject=(keysArr.length < 1)

if(isEmpetyObject){
    console.log("object is empty")
} else{
    console.log("object is not empty")
}
