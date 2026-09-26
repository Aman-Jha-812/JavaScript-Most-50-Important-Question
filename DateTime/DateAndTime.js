// 44. Guess the output

// let date = new Date(0);
// console.log(date); // 1970-01-01 00:00:00  (global)
// console.log(date.toLocaleString()); // 1/1/1970 5:30:00 AM

//45 Validate that a user's selected date range is no longer than 30 days

let nowDate = new Date('2025-04-23') // YYYY-MM-DDTHH:mm:ss.sssZ
// console.log(date)

let userDate= new Date('2025-05-19');
// console.log(userDate)

let diff = userDate-nowDate;
let numOfDays=(Math.floor(diff /1000 /60/ 60/24)) // 1s = 1000

if(numOfDays > 30){
    console.log("date khatam ho gaya bhayia ?? 30 din ke andar form submit karna tha na")
}else{
    console.log('congratulation form submit ho gaya hai')
}