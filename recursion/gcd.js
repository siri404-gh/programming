const gcd = (a, b) => (!b ? a : gcd(b, a % b));

log('GCD');
console.log(gcd(20, 8));

/* 
Euclid's Algorithm
Time complexity: O(n)
Space complexity: O(1);
*/