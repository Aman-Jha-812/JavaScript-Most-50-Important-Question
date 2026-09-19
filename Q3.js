// Generate a random integer between 0 to 18(include);

// we use math.random()
let a = Math.random();//its give you float number between 0 to 1(excluded)
// But we need integer value between 0 to 18
let b = Math.floor(Math.random()*19) //floor is used to take lower value mean if there is 5.1 its give you 5 
//console.log(b)

//between range example (10 to 28)
// Math.floor(Math.random() * (max - min + 1)) + min
let range = Math.floor(Math.random()*28-(10+1)+10)
console.log(range)