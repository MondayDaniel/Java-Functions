//        Mathematical Functions

 //  Declaration of themes/var
let num = 7;
let number = num;
 const numberOfTerm = number;
 const fSequence = fibonacci(numberOfTerm);

 //         Factorial
factorial = (number) => {
  if (number === 1)
       return 1

  return number * factorial(number - 1)
}
console.log(`factorial of number ${(number)} is ${factorial(number)}`);

//       Prime Number Check:
function Prime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
 console.log(`Is ${(num)} a Prime number?`, Prime(num))


// Fibonacci Sequence:
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0]; 
  const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
      const nextTerm = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextTerm);
    }
    return sequence;
}
 console.log(`Fibonacci sequence of ${(num)} =`,fSequence);

