// Implement a loop that prints prime numbers to the console

let numbers = [1,2,3,6,7,8,3,4,5,6,10,12];

const checkPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

numbers.forEach(function(element) {
  const isPrime = checkPrime(element);
  if (isPrime) {
    console.log(`${element} is a prime number`);
  }
});
