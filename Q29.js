// Write a JavaScript program to find the most frequent item of an array.

let str = [1, 1, 1, 1, 1, 2, 1, 3, 2, 1, 1];

function getOccurence(arr) {
  let freqobj = {};

  // Count frequency
  arr.forEach(element => {
    if (freqobj.hasOwnProperty(element)) {
      freqobj[element] = freqobj[element] + 1;
    } else {
      freqobj[element] = 1;
    }
  });

  console.log(freqobj);

  // Find maximum frequency
  let max = Math.max(...Object.values(freqobj));

  console.log("Maximum frequency:", max);

  // Convert object into entries
  let arr1 = Object.entries(freqobj);

  // Find item having maximum frequency
  let filteredArray = arr1.filter(entryArr => {
    return Number(entryArr[1]) === max;
  });

  console.log("Most frequent item:", filteredArray[0][0]);
}

getOccurence(str);