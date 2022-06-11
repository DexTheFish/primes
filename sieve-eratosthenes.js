console.time('runtime');

let max = 1000000;

// build a list of integers up to max:
// list = [0, 1, 2, ..., cap]
let list = [];
for (let i = 0; i <= max; i++) {
  list.push(i);
}

// implement the Sieve of Eratosthenes algorithm.
// loop over the list searching for nonzero entries
// whenever one is found, set its multiples to zero
// by the end, all composites in the list have been replaced by zeros.
for (let j = 2; j <= list.length - 1; j++) {
  if (list[j] !== 0) {
    for (let k = 2; k <= (list.length - 1) / j; k++) {
      list[k * j] = 0;
    }
  }
}
const filteredList = list.filter(x => x !== 0);
console.log(filteredList.length);

console.timeEnd('runtime');

// when max = 1 000 000, this simple sieve runs in about 100ms.
// that is 1/400 of the time it took to run a brute force divison algorithm!