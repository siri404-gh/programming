const factorial = num => (!num ? 1 : num * factorial(num - 1));

log('Factorial');
console.log(factorial(5));

