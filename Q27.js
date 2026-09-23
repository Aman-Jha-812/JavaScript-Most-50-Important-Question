//Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function getArrayElement(arr, n) {
  if (!n) {
    return arr[0];
  } else if (n > arr.length) {
    return ("itna element to array me present hin nhi hain");
  } else {
   return (arr.slice(0,n))
  }
}
let result =
getArrayElement([2, 5, 7, 4, 3], 5);
console.log(result)
