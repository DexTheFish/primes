

console.time('runtime');

let cap = 1000000;
let n = 2;
let primes = [];

const isPrime = function(m) {
  for (let i = 2; i < m/3; i++) {
    if (m % i === 0) {
      return false;
    }
  }
  return true;
};

while (n < cap) {
  if (isPrime(n)) {
    primes.push(n);
  }
  n += 1;
}
console.log(primes.length); // this line is quite arbitrary


console.timeEnd('runtime');