// Write a javascript function to get the number of occurrences of each letter in specified string.

let str = "aman"
function getOccurence(string){
    let obj ={};
    string.split('').forEach(element => {
        if(obj.hasOwnProperty(element)){
            obj[element]= obj[element]+1
        }else{
            obj[element]=1;
        }
    });
    console.log(obj)
}

getOccurence(str)