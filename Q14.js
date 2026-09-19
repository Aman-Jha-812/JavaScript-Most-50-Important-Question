//Build a simple isPrime() function to check if a number is prime.

let a = 1;

function isPrime(a) {
    if(a<2) return false;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) return false;
  }
  return true;
}

console.log(isPrime(a));
