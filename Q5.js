// find the maximum number in an array?

 let arr = [8,6,9,8,29,47,24,]
// let max = arr[0];
// for(let i= 1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//         i++        
//     } 
// }
// console.log(max)


let max= Math.max(...arr);
console.log(max)